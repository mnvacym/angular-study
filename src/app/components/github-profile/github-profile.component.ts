import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css'],
})
export class GithubProfileComponent implements OnInit {
  userId: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // getting the params from route
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('userId');
    });
  }
}
