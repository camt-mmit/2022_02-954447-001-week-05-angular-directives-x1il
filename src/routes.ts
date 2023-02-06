import { Routes } from "@angular/router";
import { AssigmentComponent } from "./app/assigment/assigment.component";
import { TryThreeComponent } from "./app/try-three/try-three.component";
import { TryTwoComponent } from "./app/try-two/try-two.component";
import { TryOneComponent } from "./app/try-one/try-one.component";
export const routes:Routes = [
    {path: '',redirectTo: "try-one",pathMatch:'full'},
    {path: 'try-one',component: TryOneComponent},
    {path: 'try-two',component: TryTwoComponent},
    {path: 'try-three',component: TryThreeComponent},
    {path: 'assigment',component: AssigmentComponent},
];