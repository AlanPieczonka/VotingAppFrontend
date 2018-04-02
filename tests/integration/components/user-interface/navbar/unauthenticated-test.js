import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | user interface/navbar/unauthenticated', function() {
  setupComponentTest('user-interface/navbar/unauthenticated', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#user-interface/navbar/unauthenticated}}
    //     template content
    //   {{/user-interface/navbar/unauthenticated}}
    // `);

    this.render(hbs`{{user-interface/navbar/unauthenticated}}`);
    expect(this.$()).to.have.length(1);
  });
});
