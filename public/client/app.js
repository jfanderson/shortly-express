window.Shortly = Backbone.View.extend({
  template: Templates['layout'],

//User events that will navigate to the All Links tab or Create tab where they can create a new shortened URL.
  events: {
    'click li a.index':  'renderIndexView',
    'click li a.create': 'renderCreateView'
  },

  initialize: function(){
    console.log( 'Shortly is running' );
    // Apdds the template to the body.
    $('body').append(this.render().el);

  // ?????
    this.router = new Shortly.Router({ el: this.$el.find('#container') });
    this.router.on('route', this.updateNav, this);

    Backbone.history.start({ pushState: true });
  },

  render: function(){
    this.$el.html( this.template() );
    return this;
  },

  renderIndexView: function(e){
    e && e.preventDefault();
    this.router.navigate('/', { trigger: true });
  },

  renderCreateView: function(e){
    e && e.preventDefault();
    this.router.navigate('/create', { trigger: true });
  },

  // What triggers this to update the navigation bar?
  updateNav: function(routeName){
    this.$el.find('.navigation li a')
      .removeClass('selected')
      .filter('.' + routeName)
      .addClass('selected');
  }
});
