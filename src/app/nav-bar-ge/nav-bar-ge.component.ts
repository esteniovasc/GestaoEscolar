import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-nav-bar-ge',
  templateUrl: './nav-bar-ge.component.html',
  styleUrl: './nav-bar-ge.component.css',
  providers: [ MessageService ]
})
export class NavBarGEComponent {

  pesquisarFuncao: string | undefined;
  sidebarVisible: boolean = false;

  items: MenuItem[];

  constructor(private messageService: MessageService) {
      this.items = [
          { label: 'Ajustes do usuário', icon: 'pi pi-cog', routerLink: ['/configUser'] },
          { separator: true },
          { label: 'Trocar de conta', icon: 'pi pi-refresh', routerLink: ['/tela-login'],
              command: () => {
                  this.update();
              }
          },
          { label: 'Sair', icon: 'pi pi-times', routerLink: ['/'] }   
      ];
  }

  save(severity: string) {
      this.messageService.add({ severity: severity, summary: 'Success', detail: 'Data Saved' });
  }

  update() {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
  }

  delete() {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Deleted' });
  }
  
}
