import { Component, inject, signal, WritableSignal  } from '@angular/core';
import {SvgIconComponent} from '../svg-icon/svg-icon.component'
import { NgForOf, JsonPipe, AsyncPipe} from '@angular/common';
import {RouterLink} from '@angular/router';
import {ImgUrlPipe} from '../../helpers/pipes/img-url.pipe';
import {firstValueFrom} from 'rxjs';
import {ProfileService} from '../../data/services/profile.service'
import {SubscriberCardComponent} from './subscriber-card/subscriber-card.component'
import {RouterLinkActive} from '@angular/router';
import { Profile } from '../../data/interfaces/profile.interface';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SvgIconComponent, NgForOf, AsyncPipe, RouterLink, ImgUrlPipe, SubscriberCardComponent, JsonPipe, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  profileService = inject(ProfileService)
  subcribers$ = this.profileService.getSubscribersShortList()
  me = this.profileService.me

menuItems = [
  {
    label: 'Моя страница',
    icon: 'home',
    link: 'profile/me'
  },
  {
    label: 'Чаты',
    icon: 'chats',
    link: 'chats'
  },
  {
    label: 'Поиск',
    icon: 'search',
    link: 'search'
  }
 ]

  ngOnInit() {
    firstValueFrom(this.profileService.getMe())
  }
}
