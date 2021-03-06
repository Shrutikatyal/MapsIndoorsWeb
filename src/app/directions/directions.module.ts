import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatListModule
} from '@angular/material';


import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { DirectionsComponent } from './containers/directions.component';
import { SearchComponent } from './components/search/search.component';
import { UserPositionComponent } from './components/user-position/user-position.component';
import { ShareRouteComponent } from './components/share-route/share-route.component';

import { ShareRouteModule } from './components/share-route/share-route.module';

@NgModule({
    declarations: [
        DirectionsComponent,
        SearchComponent,
        UserPositionComponent,
        ShareRouteComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatListModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        ShareRouteModule
    ]
})

export class DirectionsModule { }

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}