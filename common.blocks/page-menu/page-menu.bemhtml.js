block('page-menu').tag()('ul');
block('page-menu').elem('item').tag()('li');
block('page-menu').elem('link').tag()('a');
block('page-menu').elem('link').attrs()(function() {
    return { href: this.ctx.url };
});