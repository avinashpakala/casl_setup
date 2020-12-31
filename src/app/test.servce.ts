
import { Injectable } from '@angular/core';
import { Ability, AbilityBuilder } from '@casl/ability';

@Injectable({ providedIn: 'root' })
export class Session {
  public token: string= ''

  constructor(private ability: Ability) {}

  login() {
    this.updateAbility('admindsddsdff');
    this.token = "session.token";
    
  }

  private updateAbility(user:string) {
    const { can, rules } = new AbilityBuilder<Ability>();

    if (user === 'admin') {
      can('manage', 'all');
    } else {
      can('read', 'all');
    }

    this.ability.update(rules);
  }

  logout() {
    this.token = '';
    this.ability.update([]);
  }
}