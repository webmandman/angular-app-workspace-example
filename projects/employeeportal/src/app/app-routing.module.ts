import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveEmployeeGuard } from './shared/services/active-employee.guard';

const routes: Routes = [
  { path: 'personalinfo',
    loadChildren: () =>
      import(`./feature/personalinfo/personalinfo.module`).then(m => m.PersonalinfoModule)
  },
  { path: 'profile/:employeename',
    loadChildren: () =>
      import(`./feature/mypage/mypage.module`).then(m => m.MypageModule),
    canLoad: [ActiveEmployeeGuard]
  },
  { path: '', redirectTo: 'personalinfo', pathMatch: 'full' },
  { path: '**', redirectTo: 'personalinfo', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
