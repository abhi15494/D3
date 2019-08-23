window.onload = function () {
    // Select with D3 select method and Other method is selectAll for grab all elements same as $('') in Jquery
    // We can add only useful library for selection LINK: https://github.com/d3/d3-selection
    const el = d3
                .select('.d3visual')
                .append('p')
                .attr('data-path', 'para-path') //Transformation mathods i.e. change how a method works and appears and orders methods
                .attr('class', 'foo')
                .classed('bar', true)
                .classed('fooagain', true)
                .classed('foo', false)
                .style({'color': 'blue'})
                .text('Hello world');
    
    
}