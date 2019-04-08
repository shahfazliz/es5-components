(function(root, factory) {
    
    root.Components.NavBar = factory(
        root.$,
        root.Components
    );
    
}(window, function(
    $,
    Components
) {
    'use strict';
    
    function NavBar(element, props) {
        Components.Component.call(this, element, props);
    }
    
    NavBar.prototype = Object.create(Components.Component.prototype);
    NavBar.prototype.constructor = NavBar;
    
    NavBar.prototype.render = function(newProps) {
        Components.Component.prototype.render.call(this, newProps);
        
        var brand = 
            `<a class="navbar-brand" href="/">${this.props.brand}</a>`;
        
        var burgerButton = 
            `<button 
                type="button" 
                class="navbar-toggle collapsed" 
                data-toggle="collapse" 
                data-target="#bs-example-navbar-collapse-1" 
                aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>`;
        
        var links = this
            .props
            .children
            .map(function(link) {
                var li = $('<li></li>');
                return window
                    .location
                    .pathname
                    .slice(1) === $(link).attr('href')
                        ? li
                            .addClass('active')
                            .append($(link))
                            .append('<span class="sr-only">(current)</span>')
                        : li.append($(link));
            });
            
        var dropdownExample = 
            `<li class="dropdown">
                <a 
                    href="#" 
                    class="dropdown-toggle" 
                    data-toggle="dropdown" 
                    role="button" 
                    aria-haspopup="true" 
                    aria-expanded="false">Dropdown<span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                    <li>
                        <a href="#">Action</a>
                    </li>
                    <li>
                        <a href="#">Another action</a>
                    </li>
                    <li>
                        <a href="#">Something else here</a></li>
                    <li role="separator" class="divider"></li>
                    <li>
                        <a href="#">Separated link</a>
                    </li>
                    <li role="separator" class="divider"></li>
                    <li>
                        <a href="#">One more separated link</a>
                    </li>
                </ul>
            </li>`;
            
        var searchBarExample =
            `<form class="navbar-form navbar-left">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Search">
                </div>
                <button type="submit" class="btn btn-default">Submit</button>
            </form>`;
            
        var loginBarExample =
            `<form class="navbar-form navbar-right">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="your@email.com">
                </div>
            </form>`;
            
        var rightNavExample =
            `<ul class="nav navbar-nav navbar-right">
                <li><a href="#">Link</a></li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                    </ul>
                </li>
            </ul>`
        
        this
            .element
            .html('')
            .append($('<nav class="navbar navbar-default">')
                .css('background-color', 'white')
                .append($('<div class="container-fluid">')
                    // Brand and toggle get grouped for better mobile display
                    .append($('<div class="navbar-header">')
                        .append(burgerButton)
                        .append(brand)
                    )
                    // Collect the nav links, forms, and other content for toggling
                    .append($('<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">')
                        .append($('<ul class="nav navbar-nav">')
                            .append(links)
                            // .append(dropdownExample)
                        )
                        // .append(searchBarExample)
                        // .append(rightNavExample)
                        .append(loginBarExample)
                    )
                )
            );
        
        return this;
    };
    
    return NavBar;
}));