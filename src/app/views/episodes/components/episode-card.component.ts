import { Dialog, DialogConfig } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { stdDialogConfig } from 'src/app/constants/material';
import { Episode } from '../episode.model';
import { EpisodeMoreInfoComponent } from './more-info.component';

@Component({
  selector: 'app-episode-card',
  templateUrl: 'episode-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EpisodeCardComponent {
  @Input() episode?: Episode;
  @Input() details = true;
  dialogConfig: DialogConfig;
  constructor(private dialog: Dialog) {
    this.dialogConfig = { ...stdDialogConfig };
  }
  showDetails() {
    this.dialogConfig.data = { episode: this.episode };
    this.dialog.open(EpisodeMoreInfoComponent, this.dialogConfig as any);
  }
}
