import { Component, OnInit, Inject} from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Table } from '../../data-structure/table';

@Component({
  selector: 'app-table-detail',
  templateUrl: './table-detail.component.html',
  styleUrls: ['./table-detail.component.css']
})
export class TableDetailComponent implements OnInit {
  table: Table;
  stream_attributes = ["attr", "attr2", "attr3"]
  selectedValue: string;
 
  constructor(
    private route: ActivatedRoute,
    @Inject('data') private data
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {      
      // this.table = this.data.getTable(+params['id']);
      this.data.getTable(+params['id'])
      .then(table => this.table = table);
    });


  } 

}
