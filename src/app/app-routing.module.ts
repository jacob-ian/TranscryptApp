import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import the components for routing
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TranscriptComponent } from './transcript/transcript.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'transcript', component: TranscriptComponent },
  { path: 'disclaimer', component: DisclaimerComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
