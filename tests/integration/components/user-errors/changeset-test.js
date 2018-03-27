import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';
import { find, findAll } from 'ember-native-dom-helpers';

const exampleErrors =[
  {
    validation: ['validationError0'],
  },
  {
    validation: ['validationError1'],
  },
  {
    validation: ['validationError2'],
  },
];

describe('|Integration | Component | user-errors/changeset', function() {
  setupComponentTest('user-errors/changeset', {
    integration: true,
  });
  
  beforeEach(function(){
    this.set('errors', exampleErrors);
  })

  it('should render', async function(){
    await this.render(hbs`{{user-errors/changeset}}`);
    expect(find('.alert-danger')).to.exist;
    expect(find('.list-group')).to.not.exist;
  });

  it('should display info message', async function(){
    await this.render(hbs`{{user-errors/changeset}}`);
    expect(find('.list-group')).to.not.exist;    
    expect(find('.alert-danger').textContent.trim()).to.be.equal('There are errors in your form');
  });

  it('should display errors', async function() {
    await this.render(hbs`{{user-errors/changeset errors}}`);
    expect(find('.list-group')).to.exist;
    expect(find('.list-group li')).to.exist;
    expect(findAll('.list-group li')).to.be.an('array');
    expect(findAll('.list-group li')).to.have.lengthOf(3);
    findAll('.list-group li').forEach((element, index) => {
      expect(element.textContent.trim()).to.be.equal(`validationError${index}`);
    });  
  });
});
