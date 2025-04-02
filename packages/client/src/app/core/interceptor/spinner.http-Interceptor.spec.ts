import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { SpinnerHttpInterceptor } from './spinner.http-Interceptor';
import { SpinnerFacade } from '@domains/spinner/spinner.facade';

jest.mock('@domains/spinner/spinner.facade');

describe('SpinnerHttpInterceptor', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let spinnerFacade: jest.Mocked<SpinnerFacade>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: SpinnerFacade },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
        {
          provide: HTTP_INTERCEPTORS,
          useClass: SpinnerHttpInterceptor,
          multi: true,
        },
      ],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    spinnerFacade = TestBed.inject(SpinnerFacade) as jest.Mocked<SpinnerFacade>;
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should show and hide spinner for POST request to /api', (done) => {
    const testUrl = '/api/test';
    const testData = { data: 'test' };

    httpClient.post(testUrl, {}).subscribe({
      next: () => {
        expect(spinnerFacade.show).toHaveBeenCalled();
        done();
        expect(spinnerFacade.hide).toHaveBeenCalled();
      },
    });

    const req = httpTestingController.expectOne(testUrl);
    expect(req.request.method).toBe('POST');
    req.flush(testData);
  });

  it('should not show spinner for GET request', (done) => {
    const testUrl = '/api/test';
    const testData = { data: 'test' };

    httpClient.get(testUrl).subscribe({
      next: () => {
        expect(spinnerFacade.show).not.toHaveBeenCalled();
        done();
      },
    });

    const req = httpTestingController.expectOne(testUrl);
    expect(req.request.method).toBe('GET');
    req.flush(testData);
  });

  it('should not show spinner for POST request to non-API URL', (done) => {
    const testUrl = '/non-api/test';
    const testData = { data: 'test' };

    httpClient.post(testUrl, {}).subscribe({
      next: () => {
        expect(spinnerFacade.show).not.toHaveBeenCalled();
        done();
      },
    });

    const req = httpTestingController.expectOne(testUrl);
    expect(req.request.method).toBe('POST');
    req.flush(testData);
  });
});
