import { IPlaylist } from './../interface/playlist';
import { ISong } from './../interface/song';
import { LocalStorageService } from './local-storage.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class PlayerService {
    private static readonly PlayerStorageKey = 'player';
    private player = new Array<ISong>();
    private PlayerSubject: BehaviorSubject<ISong[]> = new BehaviorSubject<ISong[]>([]);
    private CheckPlaying: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    player$ = this.PlayerSubject.asObservable();
    isPlay$ = this.CheckPlaying.asObservable();

    constructor(private localStorageService: LocalStorageService) { }

    fetchFromLocalStorage() {
        this.player = this.localStorageService.getValue<ISong[]>(PlayerService.PlayerStorageKey) || [];
        this.updatePlayerData();
    }

    updateToLocalStorage(songlist) {
        localStorage.removeItem(PlayerService.PlayerStorageKey);
        this.localStorageService.setObject(PlayerService.PlayerStorageKey, songlist);
        this.updatePlayerData();
    }

    updatePlayerData() {
        this.PlayerSubject.next(this.player);
    }

    addSong(song: ISong): void {
        this.player = new Array<ISong>();
        this.player.push(song);
        this.updateToLocalStorage(this.player);
    }

    addPlayList(list): void {
        this.player = new Array<ISong>();
        this.player = [...list];
        this.updateToLocalStorage(this.player);
    }

    changePlayStatus(status: boolean) {
        this.CheckPlaying.next(status);
    }
}