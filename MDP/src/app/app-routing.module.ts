import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkPageComponent } from './components/pages/artifacts/work-page/work-page.component';
import { CommunityPageComponent } from './components/pages/community-page/community-page.component';
import { CompanyPageComponent } from './components/pages/company-page/company-page.component';
import { FavoritesPageComponent } from './components/pages/favorites-page/favorites-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { InterestSetupPageComponent } from './components/pages/interest-setup-page/interest-setup-page.component';
import { InterestUpdatePageComponent } from './components/pages/interest-update-page/interest-update-page.component';
import { PersonPageComponent } from './components/pages/person-page/person-page.component';
import { SearchPageComponent } from './components/pages/search-page/search-page.component';
import { SignPageComponent } from './components/pages/sign-page/sign-page.component';
import { UserPageComponent } from './components/pages/user-page/user-page.component';
import { AnimePageComponent } from './components/pages/artifacts/anime-page/anime-page.component';
import { BookPageComponent } from './components/pages/artifacts/book-page/book-page.component';
import { GamePageComponent } from './components/pages/artifacts/game-page/game-page.component';
import { MangaPageComponent } from './components/pages/artifacts/manga-page/manga-page.component';
import { MusicPageComponent } from './components/pages/artifacts/music-page/music-page.component';
import { SignupPageComponent } from './components/pages/signup-page/signup-page.component';
import { WorkCreationComponent } from './components/pages/artifacts/work-creation/work-creation.component';
import { WorkUpdateComponent } from './components/pages/artifacts/work-update/work-update.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'community/:id', component: CommunityPageComponent },
  { path: 'company/:id', component: CompanyPageComponent },
  { path: 'favorites', component: FavoritesPageComponent },
  { path: 'interestsetup', component: InterestSetupPageComponent },
  { path: 'interestupdate', component: InterestUpdatePageComponent },
  { path: 'person/:id', component: PersonPageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'user/:id', component: UserPageComponent },
  { path: 'anime/:id', component: WorkPageComponent },
  { path: 'book/:id', component: WorkPageComponent },
  { path: 'game/:id', component: WorkPageComponent },
  { path: 'music/:id', component: WorkPageComponent },
  { path: 'manga/:id', component: WorkPageComponent },
  { path: 'signin', component: SignPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'anime', component: AnimePageComponent },
  { path: 'book', component: BookPageComponent },
  { path: 'game', component: GamePageComponent },
  { path: 'manga', component: MangaPageComponent },
  { path: 'music', component: MusicPageComponent },

  { path: 'create-work', component: WorkCreationComponent },
  { path: 'update-work/:id', component: WorkUpdateComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }