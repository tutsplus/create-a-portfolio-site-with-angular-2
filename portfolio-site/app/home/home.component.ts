import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ProjectService } from '../shared/project.service';
import { Project } from '../shared/project-interface';
import {  Router }    from '@angular/router';
import { TruncatePipe } from '../shared/trunc.pipe';

@Component({
    templateUrl: 'app/home/home.html',
    directives: [ROUTER_DIRECTIVES],
    styleUrls: ['app/home/home.css'],
    pipes: [TruncatePipe]
})

export class HomeComponent implements OnInit { 
    projects: Project[];

    constructor ( public _projectService: ProjectService, public router: Router ) {}

    chooseProject(project){
        this.router.navigate(['detail', project.id]);
    }

    ngOnInit() { 
        this._projectService.getProjects()
            .then(projects => projects.slice(-3))
            .then(projects => this.projects = projects);
    }

}