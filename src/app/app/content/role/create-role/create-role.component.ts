import { Component } from '@angular/core';
import { Role } from '../role';
import { SelectItem } from 'primeng/primeng';

@Component({
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css']
})
export class CreateRoleComponent {
      codes: SelectItem[];
      selectedCodes: string[] = [];
      roles: Role[];
      // roles: SelectItem[];
      selectedRoles: Role[] = [];
      constructor() {
          this.roles = [
              // { label: '1aaa', value: {id: 1, code: 'code001', name: '1aaa', description: 'description001', parentId: 2 }},
              // { label: '2aaa', value: {id: 2, code: 'code002', name: '2aaa', description: 'description002', parentId: 1 }},
              // { label: '3aaa', value: {id: 3, code: 'code002', name: '3aaa', description: 'description003', parentId: 1 }},
              // { label: '4aaa', value: {id: 4, code: 'code003', name: '4aaa', description: 'description004', parentId: 1 }},
              // { label: '5aaa', value: {id: 5, code: 'code004', name: '5aaa', description: 'description005', parentId: 1 }},
              // { label: '6aaa', value: {id: 6, code: 'code005', name: '6aaa', description: 'description006', parentId: 1 }}
              { id: 1, code: 'code001', name: '1aaa', description: 'description001', parentId: 2 },
              { id: 2, code: 'code002', name: '2aaa', description: 'description002', parentId: 1 },
              { id: 3, code: 'code002', name: '3aaa', description: 'description003', parentId: 1 },
              { id: 4, code: 'code003', name: '4aaa', description: 'description004', parentId: 1 },
              { id: 5, code: 'code004', name: '5aaa', description: 'description005', parentId: 1 },
              { id: 6, code: 'code005', name: '6aaa', description: 'description006', parentId: 1 }
          ];
          this.codes = [
            {label: 'code001', value: 'code001'},
            {label: 'code002', value: 'code002'},
            {label: 'code003', value: 'code003'},
            {label: 'code004', value: 'code004'},
          ];
      }
  }

