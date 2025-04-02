import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NavigationComponent } from './navigation.component';
import { By } from '@angular/platform-browser';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  let router: Router;

  const setupTestingModule = async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), NavigationComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  };

  it('should create', async () => {
    await TestBed.resetTestingModule();
    await setupTestingModule();
    expect(component).toBeTruthy();
  });

  describe('Menu Data', () => {
    beforeEach(async () => {
      await TestBed.resetTestingModule();
      await setupTestingModule();
    });

    it('should have correct menu items', () => {
      const expectedMenuItems = [
        { label: 'NAVIGATION.HOME', url: '' },
        { label: 'NAVIGATION.TODO_LIST', url: 'todo/list' },
      ];
      expect(component.menuData).toEqual(expectedMenuItems);
    });

    it('should have correct router links', () => {
      const navLinks = fixture.debugElement.queryAll(By.css('nav a[routerLink]'));
      const expectedUrls = [''];

      navLinks.forEach((link, index) => {
        expect(link.attributes['ng-reflect-router-link']).toBe(`${expectedUrls[index]}`);
      });
    });
  });

  describe('UI Elements', () => {
    beforeEach(async () => {
      await TestBed.resetTestingModule();
      await setupTestingModule();
    });

    it('should have correct Tailwind classes for navigation', () => {
      const nav = fixture.debugElement.query(By.css('nav'));
      expect(nav.classes).toEqual({
        fixed: true,
        'left-0': true,
        'right-0': true,
        'top-0': true,
        'z-50': true,
        'h-16': true,
        'border-b': true,
        'border-gray-200': true,
        'bg-white': true,
      });
    });

    it('should have correct Tailwind classes for menu links', () => {
      const links = fixture.debugElement.queryAll(By.css('nav a[routerLink]'));
      links.forEach((link) => {
        expect(link.classes).toEqual({
          'rounded-md': true,
          'px-4': true,
          'py-2': true,
          'text-gray-700': true,
          'transition-colors': true,
          'hover:bg-gray-100': true,
        });
      });
    });
  });
});
