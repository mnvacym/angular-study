import { ActivatedRoute, Router } from '@angular/router';
import { GithubFollowersService } from './../../services/GithubFollowers/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css'],
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(
    private service: GithubFollowersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // combine multiple observables
    combineLatest([this.route.paramMap, this.route.queryParamMap]).subscribe(combined => {
      let userId = combined[0].get('userId');
      let page = combined[1].get('page');
      this.service.getAll().subscribe(followers => (this.followers = followers));
    });
  }

  // programmatic navigation
  backToHome() {
    this.router.navigate(['/']);
  }
}
