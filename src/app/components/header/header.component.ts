import { Component } from '@angular/core'
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    title: string = 'Task Tracker';
    showAddTask: boolean = true;
    subscription!: Subscription;

    constructor(private uiService: UiService) {
        this.subscription = this.uiService
            .oonToggle()
            .subscribe((value) => (this.showAddTask = value));
    }
    toggleAddTask() {
        this.uiService.toggleAddTask();
    }
}
