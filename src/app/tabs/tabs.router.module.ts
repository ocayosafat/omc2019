import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          },
          {
            path: 'agenda',
            children: [
               {
                 path: '',
                 loadChildren: '../home/agenda/agenda.module#AgendaPageModule'
               }, 
               {
                 path: 'agenda-detail',
                 loadChildren: '../home/agenda/agenda-detail/agenda-detail.module#AgendaDetailPageModule'
               }
            ]
          },
          {
            path: 'floor-plan',
            loadChildren: '../home/floor-plan/floor-plan.module#FloorPlanPageModule'
          },
          {
            path: 'survey',
            loadChildren: '../home/survey/survey.module#SurveyPageModule'
          },
          {
            path: 'about',
            loadChildren: '../home/about/about.module#AboutPageModule'
          },
          {
            path: 'my-seating',
            loadChildren: '../home/my-seating/my-seating.module#MySeatingPageModule'
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: '../tab2/tab2.module#Tab2PageModule'
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
