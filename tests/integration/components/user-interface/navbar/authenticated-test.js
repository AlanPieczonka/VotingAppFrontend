import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | user interface/navbar/authenticated', function() {
  setupComponentTest('user-interface/navbar/authenticated', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#user-interface/navbar/authenticated}}
    //     template content
    //   {{/user-interface/navbar/authenticated}}
    // `);

    this.render(hbs`{{user-interface/navbar/authenticated}}`);
    expect(this.$()).to.have.length(1);
  });
});
