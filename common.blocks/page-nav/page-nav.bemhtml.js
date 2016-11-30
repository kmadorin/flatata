block('page-nav').elem('message').tag()('a');
block('page-nav').elem('message').attrs()(function() {
    return { href: this.ctx.url };
});