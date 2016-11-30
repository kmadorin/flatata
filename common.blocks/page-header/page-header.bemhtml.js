block('page-header').tag()('header');
block('page-header').elem('logo').tag()('a');
block('page-header').elem('logo').attrs()(function() {
    return { href: this.ctx.url };
});
