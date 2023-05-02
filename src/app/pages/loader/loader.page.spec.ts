import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LoaderPage } from './loader.page';
import { IonicModule } from '@ionic/angular';


describe('LoaderPage', () => {
  let component: LoaderPage;
  let fixture: ComponentFixture<LoaderPage>;
  let router: Router;

  // beforeEach(waitForAsync(() => {
  //   fixture = TestBed.createComponent(LoaderPage);
  //   router = TestBed.get(Router);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // }));
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoaderPage],
      imports: [IonicModule.forRoot(), Router],
    }).compileComponents();
    fixture = TestBed.createComponent(LoaderPage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
  }));


  it('should go to login page after load', () => {
    component.ngOnInit();
    
    expect(router.navigate).toHaveBeenCalledWith('login');
  });
});
