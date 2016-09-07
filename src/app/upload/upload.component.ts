import { Component, OnInit, OnDestroy, HostListener, Output, EventEmitter, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit, OnDestroy {

  @Input()
  allowedMimeTypes: string[] = [];

  @Output()
  fileDrop = new EventEmitter<File>();

  constructor() {

  }

  ngOnInit(): void {
    console.log('created drop zone');
  }

  ngOnDestroy(): void {
  }

  @HostBinding('class.dragover')
  isDragOver: boolean = false;

  @HostListener('dragenter', ['$event'])
  dragEnter(e: DragEvent) {
    e.stopPropagation();
    e.preventDefault();

    console.log('dragenter');
    this.isDragOver = true;
  }

  @HostListener('dragleave', ['$event'])
  dragLeave(e: DragEvent) {
    console.log('dragleave');
    this.isDragOver = false;
  }

  @HostListener('dragover', ['$event'])
  dragOver(e: DragEvent) {
    e.stopPropagation();
    e.preventDefault();
  }

  @HostListener('drop', ['$event'])
  drop(e: DragEvent) {
    e.stopPropagation();
    e.preventDefault();

    this.isDragOver = false;

    const dt = e.dataTransfer;
    const files = dt.files;

    this.fileDrop.emit(files[0]);
    console.log('file drop', files[0]);
  }

}
