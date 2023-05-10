import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Status } from 'src/app/models/status';

import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EmailSenderService } from 'src/app/services/Emails/email-sender.service';
import { IntershipOffer } from 'src/app/models/IntershipOffer';
import { IntershipOfferService } from 'src/app/services/IntershipOffer/intership-offer.service';
import { Console } from 'console';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  frm!: FormGroup;
  status!: Status;
  offers: IntershipOffer[] = [];

  constructor(
    private EmailSender: EmailSenderService,
    private IntershipOfferService: IntershipOfferService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {}
  
  get f() {
    return this.frm.controls;
  }

  onPost() {
    this.status = { statusCode: 0, message: 'wait...' };
    this.EmailSender.sendClaim(this.frm.value).subscribe({
      next: (res) => {
        console.log('ok');
      },
      error: (err) => {
        this.status.statusCode = 0;
        this.status.message = 'some error on the server side';
        console.log(err);
      },
      complete: () => {
        this.status.statusCode = 0;
        this.status.message = '';
      },
    });
  }

  ngOnInit(): void {
    this.frm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      recipientEmail: ['', Validators.required],
      user_type: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, { duration: 2000 });
  }

  url = 'https://example.com/my-page';
  title = 'My Page Title';
  description = 'My Page Description';
  image = 'https://example.com/my-image.jpg';

  shareOnFacebook() {
    const params = {
      href: this.url,
      quote: this.title,
      description: this.description,
      hashtag: '#myhashtag',
      redirect_uri: 'https://example.com/redirect-page',
    };
    const shareUrl =
      'https://www.facebook.com/sharer/sharer.php?' +
      this.serializeParams(params);
    window.open(shareUrl, '_blank');
  }

  shareOnTwitter() {
    const params = {
      text: this.title,
      url: this.url,
      via: 'mytwitterhandle',
      hashtags: 'myhashtag1,myhashtag2',
    };
    const shareUrl =
      'https://twitter.com/intent/tweet?' + this.serializeParams(params);
    window.open(shareUrl, '_blank');
  }

  shareOnLinkedIn() {
    const params = {
      mini: 'true',
      url: this.url,
      title: this.title,
      summary: this.description,
    };
    const shareUrl =
      'https://www.linkedin.com/shareArticle?' + this.serializeParams(params);
    window.open(shareUrl, '_blank');
  }

  private serializeParams(params: { [key: string]: any }) {
    return Object.keys(params)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
      )
      .join('&');
  }
}
