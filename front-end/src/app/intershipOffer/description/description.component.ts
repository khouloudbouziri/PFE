import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IntershipOfferService } from '../../services/IntershipOffer/intership-offer.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
})
export class DescriptionComponent {
  offer: any = {};
  id_intership_offre: any;
  user: boolean = false;
  favoriteOffers: any = [];
  showFavorite: boolean = false;
  isClicker: boolean =false;
  isShow: boolean = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: IntershipOfferService
  ) {
    this.id_intership_offre = this.route.snapshot.paramMap.get('id');
    console.log(this.id_intership_offre);
    this.isShow = this.router.url.includes('offreDetail');
  }

  ngOnInit() {
    this.getIntershipOfferById();
    this.getAuthenticatedUser();
  }

  getAuthenticatedUser() {
    if (localStorage.getItem('token')) {
      this.user = true;
    }
    if (localStorage.getItem('visitor')) {
      const visitor = localStorage.getItem('visitor');
      if (visitor) {
        const visitorData = JSON.parse(visitor);
        console.log(visitorData.visitor.id);
        this.favoriteOffers = visitorData.visitor.favoriteOffers;
      }
      for (let i = 0; i < this.favoriteOffers.length; i++) {
        console.log(this.id_intership_offre == this.favoriteOffers[i]);
        if (this.id_intership_offre == this.favoriteOffers[i]) {
          this.showFavorite = true;
        }
      }
    }
  }

  getIntershipOfferById() {
    this.service
      .getIntershipOfferById(this.id_intership_offre)
      .subscribe((res) => {
        this.offer = res;
      });
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

  decode(byte: any): any {
    if (byte) return 'data:image/jpg;base64,' + byte;
  }
}
