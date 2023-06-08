import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ToolbarComponent } from './toolbar.component';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PagenavService } from '../pagenav.service';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;
  let pagenavService: PagenavService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarComponent],
      imports: [HttpClientModule, MatToolbarModule],
      providers: [PagenavService],
    }).compileComponents();

    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    pagenavService = TestBed.inject(PagenavService);
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call toggle method of pagenavService when toggleRightSidenav is called', () => {
    const toggleSpy = spyOn(pagenavService, 'toggle');
    component.toggleRightSidenav();
    expect(toggleSpy).toHaveBeenCalled();
  });
});
