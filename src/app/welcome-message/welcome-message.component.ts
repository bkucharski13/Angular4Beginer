import {  Component } from "@angular/core";

@Component({
    Selection: 'app-wellcome-message',
    template: '<h2>{{ welcome_message }}</h2>'
})
export class WellcomeMessageComponent {
    public welcome_message = "Hello World";
}