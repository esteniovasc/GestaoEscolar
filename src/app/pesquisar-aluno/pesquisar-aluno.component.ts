import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-pesquisar-aluno',
  templateUrl: './pesquisar-aluno.component.html',
  styleUrl: './pesquisar-aluno.component.css'
})
export class PesquisarAlunoComponent implements OnInit{

  students: any[] = [];
  idAluno!: number;
  student: any = null;
  errorMessage: string | null = null;


  constructor(private studentService: StudentService){}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
    });
    this.studentService.getStudentByID(this.idAluno).subscribe(data =>{
      this.student = data;
    })
  }

  getStudent() {
    if (this.idAluno !== null) {
      this.studentService.getStudentByID(this.idAluno).subscribe({
        next: (data) => {
          this.student = data;
          this.errorMessage = null;  // Limpa a mensagem de erro, se houver
        },
        error: (error) => {
          this.errorMessage = 'Estudante não encontrado!';
          this.student = null;  // Limpa o estudante, caso haja erro
        }
      });
    }
  }

  
}
