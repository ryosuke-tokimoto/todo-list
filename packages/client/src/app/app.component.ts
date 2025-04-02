import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from '@components/navigation/navigation.component';
import { SpinnerComponent } from '@components/spinner/spinner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, NavigationComponent, SpinnerComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
