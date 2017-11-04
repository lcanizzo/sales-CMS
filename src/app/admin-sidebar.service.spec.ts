import { TestBed, inject } from '@angular/core/testing';

import { AdminSidebarService } from './admin-sidebar.service';

describe('AdminSidebarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminSidebarService]
    });
  });

  it('should be created', inject([AdminSidebarService], (service: AdminSidebarService) => {
    expect(service).toBeTruthy();
  }));
});
