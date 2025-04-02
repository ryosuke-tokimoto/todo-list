import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './navigation.component.html',
})
export class NavigationComponent {
  menuData = [
    {
      label: 'NAVIGATION.HOME',
      url: '',
    },
    {
      label: 'NAVIGATION.TODO_LIST',
      url: 'todo/list',
    },
  ];
}
