(function(root, factory) {
    
    root.Components.Table = factory(
        root.$,
        root.Components
    );
    
}(window, function(
    $,
    Components
) {
    'use strict';
    
    /**
     * @params {object[]} props.rows
     * @params {string[]} props.columns - Column names 
     * @params {string} props.title - Title of this table 
     */ 
    function Table(element, props) {
        Components.Component.call(this, element, props);
    }
    Table.prototype = Object.create(Components.Component.prototype);
    Table.prototype.constructor = Table;
    
    Table.prototype.render = function(newProps) {
        Components.Component.prototype.render.call(this, newProps);
        
        function createHeader(columns) {
            return $('<tr></tr>')
                .append(columns.map(function(column) {
                    return $('<th>' + column + '</th>');
                }));
        }
                
                
        function createRow(rowColumn) {
            return $('<tr></tr>')
                .append(Object.keys(rowColumn).map(function(column) {
                    return $('<td>' + rowColumn[column.toLowerCase()] + '</td>');
                }));
        }
        
        var table = $('<table class="table"></table>')
            .append(createHeader(this.props.columns))
            .append(this.props.rows.map(function(row) {
                return createRow(row);
            }));
        
        this
            .element
            .html('')
            .append('<h3>' + this.props.title + '</h3>')
            .append(table);
    };
    
    return Table;
}));