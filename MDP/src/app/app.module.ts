import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ArtifactCardComponent } from './components/cards/artifact-card/artifact-card.component';
import { InterestCardComponent } from './components/cards/interest-card/interest-card.component';
import { ReviewCardComponent } from './components/cards/review-card/review-card.component';
import { HorizontalFolderComponent } from './components/controls/folder/horizontal-folder/horizontal-folder.component';
import { VerticalFolderComponent } from './components/controls/folder/vertical-folder/vertical-folder.component';
import { RateControlComponent } from './components/controls/rate-control/rate-control.component';
import { SearchBarComponent } from './components/controls/search-bar/search-bar.component';
import { SearchFilterComponent } from './components/controls/search-filter/search-filter.component';
import { LoginDialogComponent } from './components/dialogs/login-dialog/login-dialog.component';
import { RegisterDialogComponent } from './components/dialogs/register-dialog/register-dialog.component';
import { LoginFormsComponent } from './components/forms/login-forms/login-forms.component';
import { RegisterFormsComponent } from './components/forms/register-forms/register-forms.component';
import { AnimePageComponent } from './components/pages/artifacts/anime-page/anime-page.component';
import { BookPageComponent } from './components/pages/artifacts/book-page/book-page.component';
import { GamePageComponent } from './components/pages/artifacts/game-page/game-page.component';
import { MangaPageComponent } from './components/pages/artifacts/manga-page/manga-page.component';
import { MusicPageComponent } from './components/pages/artifacts/music-page/music-page.component';
import { WorkPageComponent } from './components/pages/artifacts/work-page/work-page.component';
import { BasePageModel } from './models/pages/base-page-model';
import { BasePageComponent } from './components/pages/base-page/base-page.component';
import { CommunityPageComponent } from './components/pages/community-page/community-page.component';
import { FavoritesPageComponent } from './components/pages/favorites-page/favorites-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { InterestSetupPageComponent } from './components/pages/interest-setup-page/interest-setup-page.component';
import { InterestUpdatePageComponent } from './components/pages/interest-update-page/interest-update-page.component';
import { PersonPageComponent } from './components/pages/person-page/person-page.component';
import { SignPageComponent } from './components/pages/sign-page/sign-page.component';
import { SearchPageComponent } from './components/pages/search-page/search-page.component';
import { UserPageComponent } from './components/pages/user-page/user-page.component';
import { AdListComponent } from './components/structure/ad-list/ad-list.component';
import { ArtifactListComponent } from './components/structure/artifact-list/artifact-list.component';
import { HeaderComponent } from './components/structure/header/header.component';
import { NavigationBarComponent } from './components/structure/navigation-bar/navigation-bar.component';
import { NavigationIconsComponent } from './components/structure/navigation-icons/navigation-icons.component';
import { ReviewsListComponent } from './components/structure/reviews-list/reviews-list.component';
import { BasicCompanyWidgetComponent } from './components/widgets/basic-company-widget/basic-company-widget.component';
import { BasicPersonWidgetComponent } from './components/widgets/basic-person-widget/basic-person-widget.component';
import { BasicWorkWidgetComponent } from './components/widgets/basic-work-widget/basic-work-widget.component';
import { CarouselComponent } from './components/widgets/carousel/carousel.component';
import { NewsAndHighlightsWidgetComponent } from './components/widgets/news-and-highlights-widget/news-and-highlights-widget.component';
import { RateWidgetComponent } from './components/widgets/rate-widget/rate-widget.component';
import { UserInteractionWidgetComponent } from './components/widgets/user-interaction-widget/user-interaction-widget.component';
import { WorkRelationsComponent } from './components/widgets/work-relations/work-relations.component';
import { UserWidgetComponent } from './components/widgets/user-widget/user-widget.component';
import { FullLogoComponent } from './components/full-logo/full-logo.component';
import { SmallLogoComponent } from './components/small-logo/small-logo.component';
import { ChipSearchComponent } from './components/controls/chip-search/chip-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyPageComponent } from './components/pages/company-page/company-page.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { RateDialogComponent } from './components/dialogs/rate-dialog/rate-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { JsonPipe } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { SignupPageComponent } from './components/pages/signup-page/signup-page.component';
import { StarListComponent } from './components/structure/star-list/star-list.component';
import { GenreListComponent } from './components/structure/genre-list/genre-list.component';
import { StarComponent } from './components/icons/stars/star/star.component';
import { FillStarComponent } from './components/icons/stars/fill-star/fill-star.component';
import { HalfFillStarComponent } from './components/icons/stars/half-fill-star/half-fill-star.component';
import { WorkRateDropdownComponent } from "./components/structure/work-rate-dropdown/work-rate-dropdown.component";
import { BadgeListComponent } from "./components/structure/badge-list/badge-list.component";
import { GenderToStringPipe } from './classes/gender-to-string.pipe';
import { ParticipationsListComponent } from './components/widgets/participations-list/participations-list.component';
import { AffiliatesListComponent } from './components/widgets/affiliates-list/affiliates-list.component';
import { WorkCreationComponent } from './components/pages/artifacts/work-creation/work-creation.component';
import { WorkUpdateComponent } from './components/pages/artifacts/work-update/work-update.component';
import { WorkManagementComponent } from './components/pages/artifacts/work-management/work-management.component';
import { CompanyCreationComponent } from './components/pages/company-creation/company-creation.component';
import { CompanyUpdateComponent } from './components/pages/company-update/company-update.component';
import { CompanyManagementComponent } from './components/pages/company-management/company-management.component';
import { PersonCreationComponent } from './components/pages/person-creation/person-creation.component';
import { PersonUpdateComponent } from './components/pages/person-update/person-update.component';
import { PersonManagementComponent } from './components/pages/person-management/person-management.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtifactCardComponent,
    InterestCardComponent,
    ReviewCardComponent,
    HorizontalFolderComponent,
    VerticalFolderComponent,
    RateControlComponent,
    SearchBarComponent,
    SearchFilterComponent,
    LoginDialogComponent,
    RegisterDialogComponent,
    LoginFormsComponent,
    RegisterFormsComponent,
    AnimePageComponent,
    BookPageComponent,
    GamePageComponent,
    MangaPageComponent,
    MusicPageComponent,
    WorkPageComponent,
    BasePageComponent,
    CommunityPageComponent,
    CompanyPageComponent,
    FavoritesPageComponent,
    HomePageComponent,
    InterestSetupPageComponent,
    InterestUpdatePageComponent,
    PersonPageComponent,
    SearchPageComponent,
    SignPageComponent,
    UserPageComponent,
    AdListComponent,
    ArtifactListComponent,
    HeaderComponent,
    NavigationBarComponent,
    NavigationIconsComponent,
    ReviewsListComponent,
    BasicCompanyWidgetComponent,
    BasicPersonWidgetComponent,
    BasicWorkWidgetComponent,
    CarouselComponent,
    NewsAndHighlightsWidgetComponent,
    RateWidgetComponent,
    UserInteractionWidgetComponent,
    UserWidgetComponent,
    WorkRelationsComponent,
    BasePageComponent,
    FullLogoComponent,
    SmallLogoComponent,
    SignupPageComponent,
    StarListComponent,
    StarComponent, 
    FillStarComponent, 
    HalfFillStarComponent,
    GenreListComponent,
    RateDialogComponent,
    ParticipationsListComponent,
    AffiliatesListComponent,
    ChipSearchComponent,
    GenderToStringPipe,
    WorkCreationComponent,
    WorkUpdateComponent,
    WorkManagementComponent,
    CompanyCreationComponent,
    CompanyUpdateComponent,
    CompanyManagementComponent,
    PersonCreationComponent,
    PersonUpdateComponent,
    PersonManagementComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatIconModule,
    MatExpansionModule,
    MatCheckboxModule,
    JsonPipe,
    MatRadioModule,
    WorkRateDropdownComponent,
    BadgeListComponent,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
