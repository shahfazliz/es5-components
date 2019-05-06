/* global $, Components */
'use strict';

$(document).ready(function () {
    var options = [{
        "description": "common_interface.dashboard.widgets.wcf_blocked_categories_desc",
        "enable": true,
        "icon": "icon icon-globe icon-5x",
        "imageSource": "",
        "key": "blocked_categories",
        "returnObject": {
            "enable": true,
            "gridSize": 4,
            "key": "blocked_categories",
            "service": "wcf",
            "serviceData": "DeviceReportsBundle_getTopBlockedCategories",
            "timeframe": "weekly",
            "title": "common_interface.dashboard.widgets.wcf_blocked_categories",
            "topLimit": 5,
            "type": "bar",
            "widget": "wcf.DeviceReportsBundle_getTopBlockedCategories",
            "widgetType": "chart"
        },
        "title": "common_interface.dashboard.widgets.wcf_blocked_categories"
    }, {
        "description": "common_interface.dashboard.widgets.wcf_allow_deny_desc",
        "enable": true,
        "icon": "icon icon-globe icon-5x",
        "imageSource": "",
        "key": "allow_deny",
        "returnObject": {
            "enable": true,
            "gridSize": 4,
            "key": "allow_deny",
            "service": "wcf",
            "serviceData": "DeviceReportsBundle_getDeviceAllowedVsBlocked",
            "timeframe": "weekly",
            "title": "common_interface.dashboard.widgets.wcf_allow_deny",
            "type": "bar",
            "widget": "wcf.DeviceReportsBundle_getDeviceAllowedVsBlocked",
            "widgetType": "chart"
        },
        "title": "common_interface.dashboard.widgets.wcf_allow_deny"
    }, {
        "description": "common_interface.dashboard.widgets.wcf_blocked_sites_desc",
        "enable": true,
        "icon": "icon icon-globe icon-5x",
        "imageSource": "",
        "key": "blocked_sites",
        "returnObject": {
            "enable": true,
            "gridSize": 4,
            "key": "blocked_sites",
            "service": "wcf",
            "serviceData": "DeviceReportsBundle_getTopBlockedSites",
            "timeframe": "weekly",
            "title": "common_interface.dashboard.widgets.wcf_blocked_sites",
            "topLimit": 5,
            "type": "bar",
            "widget": "wcf.DeviceReportsBundle_getTopBlockedSites",
            "widgetType": "chart"
        },
        "title": "common_interface.dashboard.widgets.wcf_blocked_sites"
    }, {
        "description": "common_interface.dashboard.widgets.wcf_blocked_users_desc",
        "enable": true,
        "icon": "icon icon-globe icon-5x",
        "imageSource": "",
        "key": "blocked_users",
        "returnObject": {
            "enable": true,
            "gridSize": 4,
            "key": "blocked_users",
            "service": "wcf",
            "serviceData": "DeviceReportsBundle_getTopBlockedUser",
            "timeframe": "weekly",
            "title": "common_interface.dashboard.widgets.wcf_blocked_users",
            "topLimit": 5,
            "type": "bar",
            "widget": "wcf.DeviceReportsBundle_getTopBlockedUser",
            "widgetType": "chart"
        },
        "title": "common_interface.dashboard.widgets.wcf_blocked_users"
    }, {
        "description": "common_interface.dashboard.widgets.fw_allow_deny_desc",
        "enable": true,
        "icon": "icon icon-sitemap icon-5x",
        "imageSource": "",
        "key": "allow_deny",
        "returnObject": {
            "enable": true,
            "gridSize": 4,
            "key": "allow_deny",
            "service": "fw",
            "serviceData": "DeviceReportsBundle_getDeviceAllowedVsBlocked",
            "timeframe": "weekly",
            "title": "common_interface.dashboard.widgets.fw_allow_deny",
            "type": "bar",
            "widget": "fw.DeviceReportsBundle_getDeviceAllowedVsBlocked",
            "widgetType": "chart"
        },
        "title": "common_interface.dashboard.widgets.fw_allow_deny"
    }, {
        "description": "common_interface.dashboard.widgets.fw_active_ports_desc",
        "enable": true,
        "icon": "icon icon-sitemap icon-5x",
        "imageSource": "",
        "key": "active_ports",
        "returnObject": {
            "enable": true,
            "gridSize": 4,
            "key": "active_ports",
            "service": "fw",
            "serviceData": "DeviceReportsBundle_getMostActivePort",
            "timeframe": "weekly",
            "title": "common_interface.dashboard.widgets.fw_active_ports",
            "topLimit": 5,
            "type": "bar",
            "widget": "fw.DeviceReportsBundle_getMostActivePort",
            "widgetType": "chart"
        },
        "title": "common_interface.dashboard.widgets.fw_active_ports"
    }, {
        "description": "common_interface.dashboard.widgets.fw_denied_targets_desc",
        "enable": true,
        "icon": "icon icon-sitemap icon-5x",
        "imageSource": "",
        "key": "denied_targets",
        "returnObject": {
            "enable": true,
            "gridSize": 4,
            "key": "denied_targets",
            "service": "fw",
            "serviceData": "DeviceReportsBundle_getTopDeniedTarget",
            "timeframe": "weekly",
            "title": "common_interface.dashboard.widgets.fw_denied_targets",
            "topLimit": 5,
            "type": "bar",
            "widget": "fw.DeviceReportsBundle_getTopDeniedTarget",
            "widgetType": "chart"
        },
        "title": "common_interface.dashboard.widgets.fw_denied_targets"
    }, {
        "description": "common_interface.dashboard.widgets.fw_denied_sources_desc",
        "enable": true,
        "icon": "icon icon-sitemap icon-5x",
        "imageSource": "",
        "key": "denied_sources",
        "returnObject": {
            "enable": true,
            "gridSize": 4,
            "key": "denied_sources",
            "service": "fw",
            "serviceData": "DeviceReportsBundle_getTopDeniedSource",
            "timeframe": "weekly",
            "title": "common_interface.dashboard.widgets.fw_denied_sources",
            "topLimit": 5,
            "type": "bar",
            "widget": "fw.DeviceReportsBundle_getTopDeniedSource",
            "widgetType": "chart"
        },
        "title": "common_interface.dashboard.widgets.fw_denied_sources"
    }, {
        "description": "common_interface.dashboard.widgets.idps_allow_deny_desc",
        "enable": true,
        "icon": "icon icon-bullhorn icon-5x",
        "imageSource": "",
        "key": "allow_deny",
        "returnObject": {
            "enable": true,
            "gridSize": 4,
            "key": "allow_deny",
            "service": "idps",
            "serviceData": "DeviceReportsBundle_getDeviceAllowedVsBlocked",
            "timeframe": "weekly",
            "title": "common_interface.dashboard.widgets.idps_allow_deny",
            "type": "bar",
            "widget": "idps.DeviceReportsBundle_getDeviceAllowedVsBlocked",
            "widgetType": "chart"
        },
        "title": "common_interface.dashboard.widgets.idps_allow_deny"
    }, {
        "description": "common_interface.dashboard.widgets.idps_top_events_desc",
        "enable": true,
        "icon": "icon icon-bullhorn icon-5x",
        "imageSource": "",
        "key": "top_events",
        "returnObject": {
            "enable": true,
            "gridSize": 4,
            "key": "top_events",
            "service": "idps",
            "serviceData": "DeviceReportsBundle_getTopEvent",
            "timeframe": "weekly",
            "title": "common_interface.dashboard.widgets.idps_top_events",
            "topLimit": 5,
            "type": "bar",
            "widget": "idps.DeviceReportsBundle_getTopEvent",
            "widgetType": "chart"
        },
        "title": "common_interface.dashboard.widgets.idps_top_events"
    }, {
        "description": "common_interface.dashboard.widgets.idps_threat_by_destination_ip_desc",
        "enable": true,
        "icon": "icon icon-bullhorn icon-5x",
        "imageSource": "",
        "key": "threat_by_destination_ip",
        "returnObject": {
            "enable": true,
            "gridSize": 4,
            "key": "threat_by_destination_ip",
            "service": "idps",
            "serviceData": "DeviceReportsBundle_getTopThreatByDestinationIP",
            "timeframe": "weekly",
            "title": "common_interface.dashboard.widgets.idps_threat_by_destination_ip",
            "topLimit": 5,
            "type": "bar",
            "widget": "idps.DeviceReportsBundle_getTopThreatByDestinationIP",
            "widgetType": "chart"
        },
        "title": "common_interface.dashboard.widgets.idps_threat_by_destination_ip"
    }, {
        "description": "common_interface.dashboard.widgets.idps_threat_by_source_ip_desc",
        "enable": true,
        "icon": "icon icon-bullhorn icon-5x",
        "imageSource": "",
        "key": "threat_by_source_ip",
        "returnObject": {
            "enable": true,
            "gridSize": 4,
            "key": "threat_by_source_ip",
            "service": "idps",
            "serviceData": "DeviceReportsBundle_getTopThreatBySourceIP",
            "timeframe": "weekly",
            "title": "common_interface.dashboard.widgets.idps_threat_by_source_ip",
            "topLimit": 5,
            "type": "bar",
            "widgetType": "chart"
        },
        "title": "common_interface.dashboard.widgets.idps_threat_by_source_ip"
    }, {
        "description": "common_interface.dashboard.widgets.idps_severities_desc",
        "enable": true,
        "icon": "icon icon-bullhorn icon-5x",
        "imageSource": "",
        "key": "severities",
        "returnObject": {
            "enable": true,
            "gridSize": 4,
            "key": "severities",
            "service": "idps",
            "serviceData": "DeviceReportsBundle_getSeverity",
            "timeframe": "weekly",
            "title": "common_interface.dashboard.widgets.idps_severities",
            "topLimit": 5,
            "type": "bar",
            "widgetType": "chart"
        },
        "title": "common_interface.dashboard.widgets.idps_severities"
    }, {
        "description": "common_interface.dashboard.widgets.idps_event_classifications_desc",
        "enable": true,
        "icon": "icon icon-bullhorn icon-5x",
        "imageSource": "",
        "key": "event_classifications",
        "returnObject": {
            "enable": true,
            "gridSize": 4,
            "key": "event_classifications",
            "service": "idps",
            "serviceData": "DeviceReportsBundle_getTopEventClassification",
            "timeframe": "weekly",
            "title": "common_interface.dashboard.widgets.idps_event_classifications",
            "topLimit": 5,
            "type": "bar",
            "widgetType": "chart"
        },
        "title": "common_interface.dashboard.widgets.idps_event_classifications"
    }];

    var widgetPicker = new Components
        .WidgetPicker(
            '<div>',
            {
                max: 6,
                onSubmit: function (selectedWidgets) {
                    console.log(selectedWidgets);
                },
                options: options,
            }
        )
        .render();

    $('#show-widget-picker').on('click', function () {
        widgetPicker.show();
    });
});