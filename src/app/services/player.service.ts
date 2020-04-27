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
    private static readonly HISTORYSONGS = 'listenedSong';
    private static readonly HISTORYPLAYLISTS = 'listenedPlaylist';
    private player = new Array<ISong>();
    private listenedSong = new Array<ISong>();
    private listenedPlaylist = new Array<IPlaylist>();
    private PlayerSubject: BehaviorSubject<ISong[]> = new BehaviorSubject<ISong[]>([]);
    private CheckPlaying: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private HistorySong: BehaviorSubject<ISong[]> = new BehaviorSubject<ISong[]>([]);
    private HistoryPlaylist: BehaviorSubject<IPlaylist[]> = new BehaviorSubject<IPlaylist[]>([]);

    player$ = this.PlayerSubject.asObservable();
    isPlay$ = this.CheckPlaying.asObservable();
    listenedSong$ = this.HistorySong.asObservable();
    listenedPlaylist$ = this.HistoryPlaylist.asObservable();

    constructor(private localStorageService: LocalStorageService) { }

    fetchFromLocalStorage() {
        this.player = this.localStorageService.getValue<ISong[]>(PlayerService.PlayerStorageKey) || [];
        this.listenedSong = this.localStorageService.getValue<ISong[]>(PlayerService.HISTORYSONGS) || [];
        this.listenedPlaylist = this.localStorageService.getValue<IPlaylist[]>(PlayerService.HISTORYPLAYLISTS) || [];
        this.updatePlayerData();
    }

    updateToLocalStorage(songlist) {
        //localStorage.removeItem(PlayerService.PlayerStorageKey);
        this.localStorageService.setObject(PlayerService.PlayerStorageKey, songlist);
        this.updatePlayerData();
    }

    updateSongToHistory(songs) {
        this.localStorageService.setObject(PlayerService.HISTORYSONGS, songs);
        this.updatePlayerData();
    }

    updatePlayListToHistory(playlists) {
        this.localStorageService.setObject(PlayerService.HISTORYPLAYLISTS, playlists);
        this.updatePlayerData();
    }

    updatePlayerData() {
        this.PlayerSubject.next(this.player);
        this.HistorySong.next(this.listenedSong);
        this.HistoryPlaylist.next(this.listenedPlaylist);
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

    historySong(song): void {
        //this.fetchFromLocalStorage();
        this.listenedSong.push(song);
        const songs = new Set<any>(this.listenedSong);
        this.updateSongToHistory([...songs]);
    }

    historyPlaylist(playlist): void {
        //this.fetchFromLocalStorage();
        this.listenedPlaylist.push(playlist);
        const playlists = new Set<IPlaylist>(this.listenedPlaylist);
        this.updatePlayListToHistory([...playlists]);
    }
}