(function (root, factory) {
    var Translator = factory();
    root.Translator = new Translator({
        "admin": {
            "confirm_password": "Re-type Password",
            "password": "Password"
        },
        "field_is_required": "Fields marked with an <span style=\"color:#1260aa\">*<\/span> are required.",
        "field_is_required_short": "<span style=\"color:#1260aa\">*<\/span>Required Field",
        "password": "password",
        "please_wait": "Please wait...",
        "account_details": {
            "service_info": "Service Info",
            "contact_details": "Contact Details",
            "account_options": "Account Options",
            "restricted_access": "Restricted Access"
        },
        "button": {
            "add": "Add",
            "cancel": "Cancel",
            "change_password": "Change Password...",
            "close": "Close",
            "continue": "Continue",
            "copy": "Copy",
            "done": "Done",
            "ok": "OK",
            "print": "Print",
            "print_view": "Print View",
            "reset": "Reset",
            "save": "Save",
            "submit": "Submit",
            "add_number": "Add number",
            "create": "Create",
            "delete": "Delete",
            "delete_selected": "Delete selected",
            "test_connection": "Test Connection",
            "search": "Search",
            "investigate": "Investigate",
            "start": "Start",
            "generate": "Generate",
            "view_more": "View More"
        },
        "contact": {
            "address1": "address 1",
            "address2": "address 2",
            "city": "city",
            "country": "country",
            "county": "county",
            "customer_tag_id": "Customer Tag ID",
            "email_address": "email address",
            "fax": "fax",
            "first_name": "first name",
            "instructions": {
                "address": "Enter contact person's address",
                "city": "Enter the contact person's city",
                "country": "Select the country in which your organization is located",
                "county": "Enter the contact person's county",
                "email_address": "Enter a valid email address for the contact person",
                "fax": "Enter a valid contact fax number, in international format. (Numbers spaces, + and - only)",
                "first_name": "Enter the contact persons's first name",
                "last_name": "Enter the contact person's last name",
                "mobile_phone": "Enter a valid contact mobile telephone number, in international format. (Numbers spaces, + and - only)",
                "password": "Enter a valid password [Must be at least 8 characters in length, and and must include at least 3 out of 4 character cases: upper case letter, lower case letter, numeric digit and special character (# $ % &, etc.)]",
                "post_code": "Enter the contact person's postal code",
                "state": "Enter the contact person's state",
                "timezone_region": "Select the region you are in.",
                "timezone_city": "Select the closest city that has same timezone as yours.",
                "work_phone": "Enter a valid contact work telephone number, in international format. (Numbers spaces, + and - only)"
            },
            "last_name": "last name",
            "mobile_phone": "mobile phone",
            "organization": "organization \/ company",
            "ou": "OU",
            "post_code": "postal code",
            "state": "state",
            "status": "status",
            "sync_source": "sync source",
            "timezone_region": {
                "title": "Timezone Region",
                "tooltip": "Select the region you are in",
                "instruction": "Select Region"
            },
            "timezone_city": {
                "title": "Timezone City",
                "tooltip": "Select the closest city that has same timezone as yours."
            },
            "title": "title",
            "work_phone": "work phone",
            "select_country": "Select country",
            "logging": {
                "updated": "Contact info updated."
            }
        },
        "domain": {
            "primary_domain": "Primary Domain",
            "tag_id": "Tag ID"
        },
        "http_error": {
            "default": {
                "heading": "Unknown error",
                "message": "An unknown error has occurred. The error has been logged and it will be reviewed. %startlink%Click here to return to the page you were on previously%endlink%. If the error persists, please contact <a href=\"mailto:supportdb@baesystems.com\">supportdb@baesystems.com<\/a>."
            },
            "401": {
                "heading": "HTTP 401 - Unauthorized",
                "message": "You are not allowed to access this content. You can either %starthistorylink%return to the previous page%endhistorylink%, or try going to %starthomelink%the SSMC home page%endhomelink%."
            },
            "403": {
                "heading": "HTTP 403 - Forbidden",
                "message": "You are not allowed to access this content. You can either %starthistorylink%return to the previous page%endhistorylink%, or try going to %starthomelink%the SSMC home page%endhomelink%."
            },
            "404": {
                "heading": "HTTP 404 - Not found",
                "message": "The page you are trying to reach does not exist. You can either %starthistorylink%return to the previous page%endhistorylink%, or try going to %starthomelink%the SSMC home page%endhomelink%."
            }
        },
        "label": {
            "account_options": "Account Options",
            "contact_details": "Contact Details",
            "default": "default",
            "maintenance": "Maintenance",
            "quantity": "quantity",
            "restricted_access": "Restricted Access",
            "service_info": "Service Info",
            "delete": "Delete",
            "item": "Item",
            "device": "Device",
            "Config": "Configs",
            "export_all": "Export All"
        },
        "error_title": "Error",
        "channel": {
            "date": "Date",
            "user": "User",
            "action": "Action",
            "detail": "Detail"
        },
        "common": {
            "actions": "Actions",
            "add": "Add",
            "cancel": "Cancel",
            "and": "and",
            "close": "Close",
            "columns": "Columns",
            "delete": "Delete",
            "description": "Description",
            "done": "Done",
            "information": "information",
            "name": "Name",
            "permissions_is_required": "Permissions is required",
            "please_wait_loading": "Please wait: Loading...",
            "remove": "Remove",
            "save": "Save",
            "status": "Status",
            "type": "Type",
            "save_and_close": "Save and Close",
            "query_error": "Search Error",
            "message": {
                "saving": "Saving...",
                "confirm_delete_name": "Are you sure you want to delete %name%?",
                "more_info": "More info",
                "updated_settings": "Successfully updated settings"
            }
        },
        "device_report": {
            "clone_ticket": "Clone this ticket",
            "new_service_request": "New Service Request",
            "new_support_ticket": "New Support Ticket"
        },
        "file_repo": {
            "archived_files": "File Repository (Archived Files)",
            "button": {
                "create_new_report": "Create New Report",
                "show_archived_reports": "Show Archived Reports"
            },
            "device_config_reports": "Device Configuration Reports",
            "error": {
                "server_error": "File Repository Server Error",
                "unable_to_retrieve_data": "Unable to retrieve report data",
                "not_found": "The report was not found in the repository. The error has been logged and it will be reviewed.",
                "email_support": "If the problem persists, please email support"
            },
            "executive_summary_reports": "Executive Summary Reports",
            "show_archived_report": "Show archived reports"
        },
        "reporting": {
            "button": {
                "schedule_new_report": "Schedule New Report"
            },
            "esr_config_title": "Copy of %title%",
            "datatable": {
                "esr_title": "Executive Summary Reports"
            },
            "date_created": "Date Created",
            "device": "Device",
            "elastic": {
                "label": {
                    "action": "Action",
                    "date_time": "Date\/Time",
                    "destination_ip": "Destination IP",
                    "username": "Username",
                    "destination_port": "Destination Port",
                    "device": "Device",
                    "device_group": "Device Group",
                    "severity": "Severity",
                    "service_type": "Service Type",
                    "source_ip": "Source IP",
                    "source_port": "Source Port"
                }
            },
            "incident_tickets_title": "Incident Tickets",
            "deviceid": "Device ID",
            "network_services_title": "Network Services",
            "email_title": "Your Executive Summary report is ready",
            "error": {
                "connection": "There was a problem communicating with server, please refresh the page and try again.",
                "could_not_save": "Could not successfully save report.",
                "generating_report": "An error occurred while generating the report.\n%message%\n",
                "report_type_undefined": "%report_type& is not defined",
                "retrieving_report": "An error occurred while retrieving the report.\n%message%\n"
            },
            "filename": "File Name",
            "label": {
                "begin_date": "Begin date",
                "block_attachment": "Blocked Attachments",
                "block_attachments_detail": "Blocked Attachments Detail",
                "block_attachments": "Blocked Attachments - <span class=\"report_period\">Last 7 Days<\/span>",
                "duration": "Duration",
                "email_volume": "Email Volume - <span class=\"report_period\">Last 7 Days<\/span>",
                "end_date": "End date",
                "last_30_days": "Last 30 Days",
                "last_48_hours": "Last 48 hours",
                "last_60_days": "Last 60 Days",
                "last_7_days": "Last 7 Days",
                "last_90_days": "Last 90 Days",
                "message_activity": "Message Activity",
                "message_activity_detail": "Message Activity<\/span> - <span class=\"smtp_detail_report_period\">Last 7 Days<\/span>",
                "message_activity_title": "Message Activity<\/span> - <span class=\"smtp_report_period\">Last 7 Days<\/span>",
                "select_device": "Select a device",
                "select_email_report": "Select Email Report",
                "select_schedule": "Select a schedule",
                "spam_activity": "Spam Activity",
                "spam_messages": "Spam Messages - <span class=\"report_period\">Last 7 Days<\/span>",
                "this_week": "This Week",
                "top_10": "Top 10",
                "top_15": "Top 15",
                "top_20": "Top 20",
                "top_30": "Top 30",
                "top_email_recipients": "Top Email Recipients",
                "top_email_senders": "Top Email Senders",
                "top_recipients": "Top Recipients (Count) - <span class=\"report_period\">Last 7 Days<\/span>",
                "top_senders": "Top Senders (Count) - <span class=\"report_period\">Last 7 Days<\/span>",
                "user_mail_flow": "User Mail Flow",
                "virus_activity": "Virus Activity",
                "virus_detail": "Virus Detail",
                "Virus List": "Virus List",
                "virus_messages": "Virus Messages - <span class=\"report_period\">Last 7 Days<\/span>"
            },
            "location": "Location",
            "report_id": "Report ID",
            "schedule": "Schedule",
            "success": {
                "generated_plainttext_email": "The Executive Summary Report \"%report_title%\" generated successfully. Use the link below to access the report from the Security Management Console.\n\n%url%\n\nNote: In order to access an Executive Summary Report you must have administrator credentials for the Security Management Console. If you are unable to login or access to the report is denied, please contact your company administrator.\n",
                "generated_html_email": "<p>The Executive Summary Report &ldquo;%report_title%&rdquo; generated successfully. Use the link below to access the report from the Security Management Console.<\/p>\n\n<p><a href=\"%url%\">%url%<\/a><\/p>\n\n<p>Note: In order to access an Executive Summary Report you must have administrator credentials for the Security Management Console. If you are unable to login or access to the report is denied, please contact your company administrator.<\/p>\n"
            },
            "tab": {
                "email_detail_reports": "Email Detail Reports",
                "email_reports": "Email Reports",
                "email_security_summary": "Email Security Summary",
                "email_summary": "Email Summary"
            },
            "timeframe": "Timeframe",
            "title": "Title",
            "title_generating_summary": "Generating summary report ...",
            "type": "Type",
            "vendor": "Vendor"
        },
        "user_mgmt": {
            "add_selected_users": "Add selected users",
            "add_selected_users_to_group": "Add selected users to group",
            "admin": "Admin",
            "check_user_passwords": "Check User Passwords",
            "distribution_list_upload": "Distribution list upload",
            "enter_firstname_lastname": "Enter a first or last name or an email address.",
            "email_address": "Email Address",
            "find_members": "Find members",
            "find_user": "Find a user",
            "find_users": "Find users",
            "first_name": "First Name",
            "secondary_tag_id": "Linked",
            "hostname": "Hostname",
            "last_name": "Last Name",
            "list_name": "List Name",
            "members": "Members",
            "owner": "Owner",
            "port": "Port",
            "remove_selected_members": "Remove selected members",
            "replace_list": "Replace list (remove existing members and replaces with members from the uploaded list)",
            "server_type": "Server Type",
            "update_options": "Update options",
            "upload_new_list": "Upload new list",
            "upload_list_members_unchanged": "Update list members and leave existing members unchanged",
            "vip": "VIP",
            "host": "Host",
            "aliases": "Aliases",
            "tooltips": {
                "customer_admin": "Is customer admin",
                "vip_customer": "Is VIP employee",
                "is_external_user": "Is external user",
                "is_auditor": "Is auditor"
            }
        },
        "sheriffBase": {
            "account_setting": {
                "change_password_done": "Your password has been changed",
                "change_password_fail": "Failed to update password.",
                "change_password_invalid": "Password must be at least 8 characters in length, and must include at least 3 out of 4 character cases: upper case letter, lower case letter, numeric digit and special character (# $ % &, etc.).",
                "change_password_not_match": "The new password and confirm password do not match.",
                "change_password_same": "Your current and new passwords cannot be the same.",
                "change_web_password_done": "Your web proxy password has been changed",
                "change_web_password_fail": "Failed to update web proxy password.",
                "change_web_password_invalid": "Web Proxy Password must be at least 8 characters in length, and must include at least 3 out of 4 character cases: upper case letter, lower case letter, numeric digit and special character (# $ % &, etc.).",
                "change_web_password_not_match": "The new password and confirm password do not match.",
                "saved_mobile": "Settings updated successfully",
                "saving_mobile": "Saving..."
            }
        },
        "data_tables": {
            "aria": {
                "sort_ascending": "Sort asccending",
                "sort_descending": "Sort descending"
            },
            "decimal": ".",
            "empty_table": "No %plural_items%",
            "empty_table_picker": "No %plural_items% to display<p>Please select a different <a href='#' id='toggle-device-picker'>device<\/a> or a longer <a href='#' id='toggle-date-range-picker'>date range<\/a>.<\/p>",
            "info": "%start_index% to %end_index% of %total_filtered% %plural_items%",
            "info_empty": "0 of 0 %plural_items%",
            "info_filtered": "(of %total_unfiltered% total)",
            "info_post_fix": " <a href=\"#\" class=\"refresh-grid\"><i class=\"icon icon-refresh\"><span class=\"sr-only\">refresh<\/span><\/i><\/a>",
            "length_menu": "Show %menu%",
            "loading_records": "Loading %plural_items%...",
            "paginate": {
                "first": "<i class=\"icon icon-angle-double-left\"><\/i><span class=\"sr-only\">First page<\/span>",
                "last": "<i class=\"icon icon-angle-double-right\"><\/i><span class=\"sr-only\">Last page<\/span>",
                "next": "<i class=\"icon icon-angle-right\"><\/i><span class=\"sr-only\">Next page<\/span>",
                "previous": "<i class=\"icon icon-angle-left\"><\/i><span class=\"sr-only\">Previous page<\/span>"
            },
            "processing": "<i class=\"icon icon-spinner icon-spin\"><\/i>",
            "search": "Search %plural_items%: ",
            "search_device": "<span class=\"input-group-addon\"><i class=\"icon icon-search\"><\/i><\/span>",
            "search_placeholder": "",
            "search_placeholder_new": "Enter Keyword",
            "thousands": ",",
            "zero_records": "No matching %plural_items% found",
            "zero_records_picker": "No matching %plural_items% found<p>Please select a different <a href='#' id='toggle-device-picker'>device<\/a> or a longer <a href='#' id='toggle-date-range-picker'>date range<\/a>.<\/p>"
        },
        "user_management": {
            "services": {
                "Archiving": "Email Archiving",
                "CMS": "Comercial Messaging Service",
                "EE": "Email Encryption",
                "EX": "Microsoft Exchange 2010",
                "ex_anc": "Exchange Ancillary",
                "gen": "General Services",
                "GWS": "Email Security",
                "KYOG": "Enhanced Email Security",
                "LM": "Log Management",
                "mssp": "Managed Security",
                "WS": "Web Security"
            },
            "global_role_unassign": {
                "success": "The requested role has been unassigned from all users.",
                "failure": "The requested role could not be unassigned from all users.",
                "not_found": "The requested role could not be found.",
                "last_admin": "Deleting the requested role would result in there being no admins for this customer."
            },
            "error": {
                "user_with_email_exists": "A user with that email already exists",
                "user_with_email_exists_same_domain": "The user %email% already exists under another customer %customer% (%tag%) with %service% service. You can associate a single user with multiple services and\/or products. <br\/><br\/> Would you like to continue and add this user to the %this_service% service (%this_tag%) as well?",
                "create_user": "An error occurred when trying to create the user.",
                "populate_user_services": "An error occurred when trying to populate user services",
                "assign_access_dates": "An error occurred when trying to assign access dates.",
                "update_user": "An error occurred when trying to update the user.",
                "email_domain_exists": "A customer in the system is already using that email domain. Please provide a different email address.",
                "cannot_edit_syncing": "Sorry information for this user cannot be changed. (LDAP syncing)",
                "cannot_edit_no_perm": "Sorry information for this user cannot be changed. (You do not have permission to edit a user account)",
                "cannot_edit_no_ext_perm": "Sorry information for this user cannot be changed. (You do not have permission to edit an external user account)",
                "no_role_edit_perm": "Sorry information for this role cannot be changed. (You do not have permission to edit roles)",
                "role_edit_perm_required": "Roles must contain at least one user with Edit Roles Permission, Role not saved!",
                "phone_number_invalid_region": "The phone number entered is not valid for the specified region.",
                "invalid_user": "An error occurred because an invalid user was requested. Please contact your System Administrator for help.",
                "invalid_role": "An error occurred because an invalid role was requested. Please contact your System Administrator for help.",
                "invalid_domain": "The email address must be within the primary or alternate domains.",
                "invalid_timezone": "Invalid timezone.",
                "cannot_set_proxy_password": "New web proxy password could not be set.",
                "invalid_cloud_pw": "New cloud password must not be on one of the last %limit% passwords.",
                "invalid_proxy_pw": "New web proxy password must not be on one of the last %limit% passwords.",
                "admin_only": "This user is the only administrator so you cannot remove all roles.",
                "invalid_manager_email": "Unable to set manager: %manager_email% Please make sure the manager is a valid user.",
                "invalid_alias": "The alias %bad_alias% is invalid. Please try a different unique alias.",
                "invalid_aliases": "The aliases %bad_aliases% are invalid. Please try a different unique alias.",
                "alias_in_use": "The alias %caught_alias% is already in use. Please try a different unique alias.",
                "cannot_remove_alias": "Unable to remove alias.",
                "unique_email_alias": "Please check that the email address and any aliases are unique.",
                "cannot_get_customer_list": "Unable to get customer list for user search.",
                "cannot_get_search_info": "Must be a customer or shadowing a customer to get user search info.",
                "cannot_update_sync_option": "An error occurred updating the sync option. Please contact your System Administrator for help.",
                "retrieve_mailbox_error": "Error getting unlicensed mailboxes from o365.",
                "retrieve_excludes_error": "Error getting exluded mailboxes.",
                "save_excludes_error": "Error saving excluded mailboxes.",
                "secondary_tag_unlink_managed": "The user %email% is managed as part of the \"%company_name% (%company_tag%)\". Please contact your administrator if you would like this user removed.<br\/><br\/> Would you like to unlink this user from \"%this_company_name% (%this_company_tag%)\" instead?.",
                "secondary_tag_unlink_associated": "The user %email% is also associated with \"%company_name% (%company_tag%)\". Deleting this user will remove all access to the SMC.<br\/><br\/>Are you sure you want to delete this user?",
                "secondary_tag_unlink_unlink": "The user %email% is associated with \"%company_name% (%company_tag%)\". Unlinking this user will remove them from your Users list.<br\/><br\/>Are you sure you want to unlink this user?"
            },
            "success": {
                "secondary_tag_associate": "The user was successfully associated.",
                "secondary_tag_unlink": "%email% was successfully unlinked.",
                "external_create": "The external user was successfully created.",
                "external_update": "The external user was successfully updated.",
                "unlicensed_mailbox_success": "Successfully updated unlicensed mailbox sync.",
                "next_sync": "The change will take effect when your next scheduled sync runs."
            },
            "tab_label": {
                "manage_users": "Manage Users",
                "new_user": "New User",
                "new_external_user": "New external user",
                "sync_options": "Sync Options"
            },
            "label": {
                "admin": "Administrator",
                "admin_privilege": "Allow admin privileges.",
                "name": "Name",
                "add_alias": "Add alias",
                "notify_user": "Notify User",
                "new_user": {
                    "external_user": "External user",
                    "external_access_dates": "Access dates"
                },
                "manager": "Manager",
                "manager_email": "Manager",
                "cloud_password": "Cloud Password",
                "password": "Password",
                "password_confirm": "Confirm Password",
                "change_password": "Change Password",
                "send_pw_reset": "Send password reset email to user",
                "set_web_proxy_pw": "Set Password",
                "web_proxy_pw": "Web Proxy Password",
                "aliases": "Aliases",
                "add_aliases": "Add aliases",
                "yes_last_admin": "Yes (last admin)",
                "managed_users": "Managed Users",
                "no_managed_users": "No managed users",
                "sync_unlicensed": "Sync unlicensed mailboxes",
                "unlicensed_mailboxes": "Unlicensed Mailboxes",
                "filter_all": "Show All",
                "filter_sync": "Synced",
                "filter_exclude": "Excluded",
                "timezone": "Timezone",
                "create_dt": "Created"
            },
            "button": {
                "add_user": "Add User",
                "add_external_user": "Add external user",
                "export": {
                    "label": "Export Users",
                    "title": "Export user list to CSV file"
                },
                "shadow_user": "Shadow User",
                "delete_user": "Delete User",
                "upload": "Upload",
                "download": "Download",
                "show_managed_users": "Show managed users"
            },
            "edit": {
                "first_name_placeholder": "First Name",
                "last_name_placeholder": "Last Name",
                "email_placeholder": "Email Address",
                "email_title": "Valid email is required",
                "revert": "Revert",
                "change_password_placeholder": "Enter new password",
                "change_password_confirm_placeholder": "Confirm password",
                "web_proxy_pw_placeholder": "Enter new password",
                "web_proxy_pw_title": "Enter a valid password [Must be at least 8 characters in length, and must include at least 3 out of 4 character cases: upper case letter, lower case letter, numeric digit and special character (# $ % &, etc.)]",
                "add_alias_placeholder": "Enter new alias",
                "send_password_reset_email": "Sending password reset email",
                "set_manager": "Set Manager",
                "success_send_password_reset_email": "Successfully sent reset password email",
                "saving_user": "Saving user...",
                "remove_email_domain": "%email_domain% has been removed",
                "alias_taken_error": "The alias %field_name% is already in use. Please try a different unique alias.",
                "secondary_tag_id": "Secondary TAG ID",
                "set_timezone": "Set timezone"
            },
            "delete": {
                "confirm_delete": "Are you sure you want to delete the user %field_name%?",
                "delete_process": "Deleting user: %field_name%..."
            },
            "new_user": {
                "title": {
                    "first_name": "First Name",
                    "password": "Enter a valid password [Must be at least 8 characters in length, and must include at least 3 out of 4 character cases: upper case letter, lower case letter, numeric digit and special character (# $ % &, etc.)]",
                    "password_confirm": "Passwords must match."
                },
                "placeholder": {
                    "manager_email": "Enter manager email address"
                },
                "create_another": "Create another"
            },
            "warning": {
                "account_locked": "This user is currently locked out.",
                "expire": "The lockout will expire at",
                "expire_alt": " The lockout will expire at %time% on %date%. ",
                "remedy": "To unlock sooner, please reset the user's password.",
                "no_edit_roles": "Roles cannot be added or removed for the current user.",
                "no_edit_roles_perm": "You do not have permission to add\/modify roles.",
                "we_have_found_error": "We have found the following error(s)",
                "please_check_red_label": "Please check the fields in red and try again",
                "unlicensed_not_enabled": "Sync of unlicensed mailboxes is currently disabled. You must enable this before any settings below will take effect."
            },
            "mail_engine": {
                "label": "Source Directory",
                "select_engine": "Select a source directory to import and manage users and groups within the management console. This includes synchronization with a directory or other data source.",
                "setup": {
                    "gapps": "Directory Services connects to your Google Apps directory to import users and groups based on the data in your server. To setup Google Apps directory services you must first set your configuration in Google Apps. Please see the <a href=\"%url%\" target=\"help_docs\">Configuring Google Apps Synchronization<\/a> section of our knowledge base for full instructions.",
                    "O365": "Directory Services connects to your Office 365 directory to import users and groups based on the data in your server. To setup Office 365 directory services you must first set your configuration in Microsoft Azure. Please see the  <a href=\"%url%\" target=\"help_docs\">Configuring Office 365 Synchronization<\/a> section of our knowledge base for full instructions."
                },
                "select_option": "Select source directory",
                "test_label": "Test Connection",
                "test_help": "Test connection to validate credentials.",
                "logging": {
                    "updated": "Directory Services Updated",
                    "mail_engine_set": "Source Directory set to %engine%.",
                    "host_created": "LDAP host created."
                }
            },
            "role_editor": {
                "heading": {
                    "create": "Create New Role"
                },
                "label": {
                    "description": "Role Description",
                    "description_is_required": "Role Description is required",
                    "description_required": "Role Description*",
                    "devices": "Devices",
                    "name": "Role Name",
                    "name_is_required": "Role Name is required",
                    "name_required": "Role Name*",
                    "no_device": "No device available",
                    "permissions": "Permissions",
                    "permissions_is_required": "Permissions is required",
                    "permissions_required": "Permissions*",
                    "special_character": "Only alphanumeric characters allowed",
                    "users": "Users"
                },
                "log": {
                    "add_role_message": "Device Added: %device_name%."
                }
            },
            "help": {
                "sync_unlicensed_1": "By default only user mailboxes with active exchange licenses are synchronized. This control allows you to choose to also sync unlicensed mailboxes.  These are typically shared mailboxes but may include other types depending on your O365 configuration.",
                "sync_unlicensed_2": "The change will take effect when your next scheduled sync runs.",
                "saving_note": "Saving ..."
            },
            "saml": {
                "saml_sso_enabled": "SAML SSO enabled",
                "permit_local_login": "Permit local login",
                "test_current": "Test current settings",
                "test_button": "Test",
                "idp_info": "Identity Provider Settings",
                "idp_config_type": "Configuration method",
                "idp_file_type": "Upload IDP settings",
                "idp_field_type": "Input IDP settings",
                "idp_sso_url": "Single sign-on URL",
                "idp_issuer": "IDP issuer",
                "idp_x509_cert": "X.509 certificate",
                "idp_cert_fingerprint": "Certificate fingerprint",
                "auth_type": "Authentication type",
                "upload_idp_file": "Upload IDP File",
                "idp_reload": "Use uploaded IDP metadata",
                "uploaded_metadata": "Uploaded metadata",
                "service_settings": "Service Settings",
                "update_error": "An error occurred when trying to update SAML settings.",
                "upload_error": "An error occurred uploading IDP metadata file.",
                "reload_error": "An error occurred reloading existing IDP metadata.",
                "upload_empty_error": "Please select a IDP metadata file to upload.",
                "parse_metadata_error": "Could not parse uploaded IDP metadata file.",
                "upload_fail_error": "An error occurred saving the uploaded IDP metadata file.",
                "download_fail_error": "An error occurred downloading the service provider metadata file.",
                "metadata_download_no_config": "You must enter your Identity Provider Settings before downloading the Service Provider settings file.",
                "service_provider_settings": "Service Provider Settings",
                "download_sp_file": "Download service provider settings",
                "asc_url": "Assertion consumer service URL",
                "entity_id": "Entity ID",
                "relay_state": "Default relay state",
                "logging": {
                    "enabled": "SAML SSO enabled.",
                    "disabled": "SAML SSO disabled.",
                    "local_login_enabled": "Permit local login enabled.",
                    "local_login_disabled": "Permit local login disabled.",
                    "config_settings_updated": "SAML SSO configuration updated.",
                    "idp_updated": "SAML SSO identity provider configuration updated.",
                    "idp_file_updated": "SAML SSO identity provider configuration updated by file upload.",
                    "idp_reload": "SAML SSO identity provider configuration restored to saved file metadata."
                },
                "help": {
                    "idp_sso_url": "Enter the single sign-on URL provided by your identity provider (IDP).",
                    "idp_issuer": "Enter the issuer URL provided by your identity provider (IDP).",
                    "idp_cert": "You may either enter the full X.509 certificate content provided by your identity provider or the certificate fingerprint.",
                    "idp_choose_method": "You may either upload an IDP file from your provider or enter the configuration information separately.",
                    "idp_choose_upload": "Alternatively, you may upload an IDP file from your provider.",
                    "idp_choose_input": "Alternatively, you may enter the configuration information directly.",
                    "sp_download_note": "Downloading service provider settings ...",
                    "saving_note": "Saving ...",
                    "sso_error": "A single sign-on URL is required.",
                    "idp_error": "An IDP issuer is required.",
                    "finger_error": "A certificate fingerprint is required.",
                    "cert_error": "An X.509 certificate is required.",
                    "idp_metadata_error": "Please select an IDP metadata file to upload.",
                    "idp_upload_note": "IDP configuration uploaded.",
                    "upload_note": "Uploading ...",
                    "idp_category": "These settings are provided by your Identity Provider (IDP).<br> Choose a configuration method and either upload a metadata file provided by your IDP or enter the settings into the form.",
                    "test_category": "Once you have configured both IDP and Service Provider settings, you should test your setup to verify that everything is properly configured.",
                    "service_settings_category": "Once you have verified that your Single Sign On setup is working, you can enable single sign-on and (optionally) allow login with local credentials.",
                    "service_provider_category": "Your IDP will require these settings to configure this as a Service Provider.<br> You can either download the settings file below and upload it into your IDP (if supported)  or copy and paste the settings directly into your IDP.",
                    "test_settings": "Once you have completed IDP and SP configuration and enabled SAML SSO, you can click to try a test login.<br> Log in using a user already configured in your IDP and SMC.<br>If you are currently logged into your IDP admin application, log out before testing.",
                    "email_attribute": "When configuring the SMC as a Service Provider in your IDP, you must configure the IDP to send the user's email address in the 'email' attribute.<br>This address must match a primary or alias email address for the user in the SMC."
                },
                "btn": {
                    "upload_idp": "Upload IDP file",
                    "enter_idp": "Enter IDP settings"
                },
                "test": {
                    "unconfigured": "SAML SSO not configured for this customer. SAML Single Sign On configuration must be completed and saved before testing.",
                    "success": "SAML SSO Authentication succeeded against your Identity Provider.",
                    "user": "Authenticated user: %username%",
                    "valid_smc": "User %username% is a valid SMC address.",
                    "success_congrats": "Congratulations! You have successfully configured Single Sign-On for your SMC account.",
                    "user_fail": "User %username% is not a valid user under your Customer account.  For successful SMC login, the IDP authentication response must contain a valid 'email' address attribute that maps to a user in your SMC Account.",
                    "user_fail_email": "User %username% is not a valid SMC user. For successful SMC login, the IDP authentication response must contain a valid SMC email address in the 'email' attribute.",
                    "email_fail": "Required 'email' attribute was not found in the IDP Response. Check your identity provider setup to ensure that a valid SMC email address is sent in the IDP Authentication response.",
                    "fail": "SAML SSO Authentication failed. Check your configuration."
                }
            },
            "upload": {
                "user_upload_template_header": "User Upload Template",
                "alias_header": "User Alias File Upload",
                "users_tab": "Upload Users",
                "alias_tab": "Upload Aliases",
                "alias_info_1": "Upload a CSV file to create aliases.",
                "alias_info_2": "Fields for the CSV file: Alias Email Address, Primary Email Address",
                "alias_example": "Example",
                "alias_send_file": "Send alias file",
                "user_header": "User File Upload",
                "user_info_1": "Upload a CSV file to populate user accounts.",
                "user_info_2": "Fields (headers) for the CSV file: Email Address, Password, First Name, Last Name, Group (OU), Timezone, Admin, VIP, Manager",
                "user_info_2a": "Fields (headers) for the CSV file: Email Address, Password, First Name, Last Name, Group (OU), Timezone, Admin, Manager",
                "user_info_3": "Fields for the CSV file: Email Address, Password, First Name, Last Name, OU, Timezone, Admin, VIP",
                "user_info_3a": "Fields for the CSV file: Email Address, Password, First Name, Last Name, OU, Timezone, Admin",
                "user_info_4": "The file should include a header row with the fields to be updated.  Email address is always required. If the file contains new users; password and first and last names are also required.",
                "user_info_5": "File templates, including the correct headers can be downloaded below.",
                "user_info_6": "<b>Note:<\/b> Users with weak passwords represent a security risk to your organization. It is recommended to have users change passwords immediately upon receiving access to the portal.",
                "template_header": "Download templates",
                "template_info": "The blank template includes only the headers and a row of mock data. The existing users file can be used to update current users. You may choose which fields to include.",
                "template_blank": "Blank template",
                "template_existing": "Existing users",
                "template_download": "Download",
                "send_file": "Send this file",
                "update_option_3": "Create new users and leave existing users unchanged",
                "update_option_2": "Create new users and update existing users",
                "update_option_1": "Create new users, update existing users, and delete users not in the list (Admins are not deleted in this operation)",
                "template_info_1": "Choose the fields to include in your blank template.",
                "template_info_2": "Choose the fields to be downloaded for your existing users.",
                "template_info_3": "Email address is always required. Where templates are to be used to create new users, password and both name fields are required.",
                "template_email": "Email Address",
                "template_password": "Password",
                "template_first_name": "First Name",
                "template_last_name": "Last Name",
                "template_ou": "OU",
                "template_admin": "Administrator",
                "template_vip": "VIP",
                "template_manager": "Manager",
                "choose_uploads": "You must choose a file to upload.",
                "choose_cvs": "You must choose a .csv or .txt file to upload.",
                "importing_users": "Importing Users...",
                "existing_title": "Download Existing Users",
                "blank_title": "Download Blank Template",
                "creating_template": "Creating template...",
                "upload_failed": "File upload failed",
                "file_invalid": "File type not valid",
                "file_errors": "There are errors in the file for upload",
                "no_users": "No users found in the CSV document. Please double check your formatting and that all email addresses are within the primary domain.",
                "upload_error": "There were errors uploading the user file",
                "invalid_header": "Invalid CSV header",
                "no_email": "No email header. You must include email data in a user upload.",
                "invalid_columns": "You should include at least one other data column in addition to email in a user upload.",
                "newuser_columns": "Uploads including new users must have email, password and name data.",
                "invalid_domain": "The email must be within the primary or alternate domains. Invalid domain in row",
                "invalid_email": "Invalid email record in row",
                "empty_password": "Empty password in row",
                "empty_first": "Empty first name in row",
                "empty_last": "Empty last name in row",
                "bad_email": "Invalid manager email record in row",
                "invalid_timezone": "Invalid timezone",
                "bad_header": "Unidentified header in row",
                "type_error": "The template type has not been set",
                "template_data": "Error  getting customer data for template.",
                "ex_info_1": "Download and complete the attached spreadsheet. When finished, upload the spreadsheet to begin the import process. The import process requires manual entry and usually takes several hours to complete.",
                "ex_info_2": "Note: There may be a fee associated with uploading users depending on your contract. Please consult with your Account Manager if you have questions.",
                "ex_file_label": "Send exchange users file:",
                "ex_upload_button": "Upload"
            },
            "ous": {
                "response": {
                    "unable_to_get": "Unable to get OUs",
                    "unable_to_get_users": "Unable to get users for %ou_name%",
                    "unable_to_create_ou": "Unable to create OU %ou_name%",
                    "unable_to_locate_old_ou": "Unable to locate old OU",
                    "unable_to_delete_ou": "Unable to delete OU",
                    "unable_to_move_users": "Unable to move users",
                    "error_missing_required_field_ou_id": "Missing required field: OU ID",
                    "error_users_assigned": "This OU has users assigned to it. Please reassign users to a different OU before deleting.",
                    "error_ldap_connection": "Unable to make LDAP connection. Rules using LDAP OUs may not display correctly."
                },
                "loading": "Loading...",
                "toolbar": {
                    "title": "Select the parent to add a sub OU."
                },
                "button": {
                    "move_selected_users": "Move Selected Users",
                    "cancel": "Cancel",
                    "save": "Save"
                },
                "new_ou": {
                    "title": "New OU",
                    "form_title": "Enter a name for the OU.",
                    "label": {
                        "name": "Name",
                        "parent_ou": "Parent OU"
                    }
                },
                "rename_ou": {
                    "title": "Rename OU",
                    "form_title": "Enter the new OU name."
                },
                "move_ou": {
                    "title": "Move OU",
                    "form_title": "Select different parent to move the OU."
                }
            },
            "roles": {
                "main_tab_title": "Roles",
                "button": {
                    "add_role": "Add Role"
                },
                "edit": {
                    "device_add_device": "Add Device",
                    "permission_add": "Add Permissions"
                }
            },
            "dl": {
                "tab_manage": "Manage Lists",
                "tab_upload": "Upload List",
                "search_placeholder": "Find lists by name or email address",
                "search_placeholder_users": "Find users by name or email address",
                "add_list_button": "Add List",
                "upload_button": "Upload",
                "delete_selected_list_button": "Delete Selected Lists",
                "info_1": "Upload a CSV file to add or update a distribution list.",
                "info_2": "Fields for the CSV file: Member Emails",
                "info_3": "Example:",
                "info_4": "The list owner is optional but must be a user within the company.",
                "info_5": "There can only be one list owner.",
                "info_6": "The list owner is optional but must be a user within the company. There can only be one list owner. Changing the list owner will only affect messages sent after the change.",
                "label_alias": "Aliases",
                "label_add_alias": "Add Alias",
                "label_list_owner_email": "List Owner Email",
                "label_select": "Select",
                "label_list_name": "List Name",
                "label_email_address": "Email Address",
                "label_list_details": "List Details",
                "label_members": "Members",
                "add_member_button": "Add Members"
            },
            "dir": {
                "label_recent_queries": "Recent queries: ",
                "error_unable_get_ldap": "Unable to get ldap server list",
                "error_getting_ldap_config": "Error getting ldap host config",
                "error_cannot_find_host": "Cannot find ldap host",
                "error_create_ldap": "Error creating ldap host",
                "error_update_ldap": "Error updating ldap host",
                "error_get_host_list": "New host created but unable to get host list",
                "error_set_primary": "Unable to set primary host",
                "error_get_primary_host_list": "Primary host was set but unable to get host list",
                "error_delete_host": "Unable to delete host",
                "error_get_delete_host_list": "Host deleted but unable to get host list",
                "error_get_config_fields": "Unable to get configuration fields",
                "error_invalid_credentials": "Invalid credentials. Unable to to save settings",
                "error_set_source_dir": "Unable to set source directory",
                "error_set_create_mail_host": "Unable to set create mail host",
                "error_add_gapps": "Unable to add gapps domain to ESD",
                "error_set_external_auth": "Unable to set external auth service in ESD",
                "error_add_inbound_ip": "Unable to add Inbound IP routing to ESD",
                "error_failed_connect": "Failed to connect with the current credentials",
                "error_unable_set_key": "Unable to set %key%",
                "error_unknown_source_dir": "Unknown source directory [%engine%]. Unable to test connection",
                "error_cannot_connect": "Fatal Error: Could not connect to %server%:%port%",
                "error_cannot_connect_2": "Failed to connect. Could not bind to %server%:%port%. Check your connection settings or credentials.",
                "error_cannot_bind_anon": "Fatal Error: Could not bind anonymous user to %server%:%port%",
                "error_cannot_bind_anon_2": "Failed to connect: Could not bind anonymous user to %server%:%port%. Check your connection settings or credentials",
                "error_cannot_bind_username": "Fatal Error: Could not bind username to %server%:%port%",
                "error_cannot_bind_username_2": "Failed to connect: Could not bind %user% to %server%:%port%. Check your connection settings or credentials",
                "success_create_host": "Successfully created new host",
                "success_set_primary": "Successfully set primary host",
                "success_delete_host": "Host successfully deleted",
                "success_connect": "Successfully connected. Credentials are valid",
                "success_connect_2": "Successfully connected and authenticated to %server%:%port%",
                "tab_title": "Directory Hosts",
                "tab_server": "Server",
                "tab_conn_filter": "Connection & Filters",
                "tab_attributes": "Attributes",
                "tab_sync": "Synchronization",
                "tab_notification": "Notification",
                "button_new_host": "New Host",
                "button_query": "Query",
                "button_rec_query": "Recursive Query",
                "label_select_dir_source": "Select directory source",
                "label_host_desc": "Host description",
                "label_protocol_version": "Protocol Version",
                "label_hostname": "Hostname",
                "label_port": "Port (leave blank for standard port)",
                "label_login_name": "Login name",
                "label_password": "Login password",
                "label_baseDN": "Base DN",
                "label_user_search": "User search filter",
                "label_dist_search": "Distribution list search filter",
                "label_use_ssl": "Use SSL",
                "label_login_attr": "Unique ID attribute",
                "label_firstname_attr": "First name attribute",
                "label_lastname_attr": "Last name attribute",
                "label_primary_email_attr": "Primary email address attribute",
                "label_manager_attr_1": "Manager DN attributes (comma separated list)",
                "label_manager_attr_2": "This applies to user managers and distribution list owners\/managers",
                "label_email_alias_attr_1": "Email alias attributes (comma separated list)",
                "label_email_alias_attr_2": "The first value should match the 'Primary email address'",
                "label_sync_ou": "Sync OUs",
                "label_dist_name": "Distribution list name",
                "label_dist_member": "Attribute containing the DNs of members",
                "label_connecting": "Connecting to server ...",
                "label_sync_host": "Synchronize this host",
                "label_check_pw": "Check passwords for users against this host (takes effect a few minutes after next sync)",
                "label_schedule_sync": "Schedule synchronization",
                "label_run_every": "Run every",
                "label_run_time": "Run time",
                "label_server_time_date": "Server time & date:",
                "label_receive_sync_noti": "Receive sync notifications",
                "label_email_recipient": "Email recipients",
                "label_enter_valid_email": "Please enter a valid email",
                "label_ldap_browser": "LDAP Browser",
                "label_filter": "Filter",
                "label_attributes": "Attributes",
                "placeholder_host": "(Description to identify the Directory Service host)",
                "placeholder_hostname": "(REQUIRED: must be a valid hostname, example: www.myserver.com)",
                "placeholder_baseDN": "(Initial query for LDAP database)",
                "h3_server": "Server",
                "h3_connection": "Connection",
                "h3_filters": "Filters",
                "h3_login": "Login",
                "h3_attributes": "User Attributes",
                "h3_dist_list_attributes": "Distribution List Attributes",
                "h3_sync": "Synchronization",
                "h3_schedule_option": "Schedule options",
                "h4_test_sync": "Test Sync",
                "noti_info_1": "After synchronization send a notification to specified Email recipients (below). The notification displays any email addresses, distribution lists or aliases that were changed, added or removed during the synchronization process. You will NOT receive a notification if no changes occurred during the synchronization.",
                "noti_info_2": "If there are more than 40 changes during the synchronization, the notification will display an overview summary of the changes that occurred during the synchronization process.",
                "noti_info_3": "Input one or more email address (separated by comma or semicolon) that synchronization notifications will be sent to. A valid email address in the company domain is preferred.",
                "conn_info_1": "These instructions are for Windows Users only. You must be logged in as a Domain Controller to access Base DN information.",
                "conn_li_1": "Click Start and select Run. Type LDP and click Run.",
                "conn_li_2": "When the LDP window appears, click Connection and then select Connect.",
                "conn_li_3": "In the Server field, input your IP Address if you know it. If you do not know your IP address input \"localhost\".",
                "conn_li_4": "Click OK.",
                "conn_li_5": "From the LDP window, click Connection and then select Bind. In the Bind dialog make sure \"bind is currently logged on user\" is selected.",
                "conn_li_6": "Click OK.",
                "conn_li_7": "From the LDP window click Browse and then select Search. In the Base DN drop down menu, select the first option (ex. DC=silversky).",
                "conn_li_8": "Change the Filter to (CN=Administrator) - use the name that you gave for the account. This could be silversky admin, etc. If this doesn't work try (samAccountName=Administrator).",
                "conn_li_9": "Select Subtree as the Scope.",
                "conn_li_10": "Click Run.",
                "conn_li_11": "In the LDAP window - highlight the bold DN text and paste it into the Base DN field on this page."
            }
        },
        "US": {
            "nsc": {
                "home": {
                    "title": "Welcome to the Security Management Console (SMC)",
                    "select": "Select one of the actions below.",
                    "no_available_services": "Please contact your system administrator to grant you access to Managed Security Services",
                    "general_overview": {
                        "title": "General Overview",
                        "text": "Device overview and summary information, this includes device health, executive summary reports, and any incident tickets."
                    },
                    "viewpoint": {
                        "title": "ViewPoint",
                        "text": "Navigate to existing ViewPoint services and reports. These include previously available data and functionality.",
                        "button": "Go to ViewPoint"
                    },
                    "network_services": {
                        "title": "Network Services",
                        "text": "Select one of the services below to view recent logs and events."
                    },
                    "firewall_management": {
                        "title": "Firewall Management",
                        "text": "View the health of your firewall device, download configuration files, or raise a service request."
                    },
                    "security_monitoring": {
                        "title": "Security Monitoring",
                        "text": "View the status or raise a new service incident request."
                    },
                    "vuma": {
                        "button": "Go to Vulnerability Management",
                        "text": "This link will take you directly to your vulnerability management portal.",
                        "title": "Vulnerability Management"
                    }
                },
                "maintenance": {
                    "warning": {
                        "click_here": "Click Here",
                        "title": "Maintenance:",
                        "text1": "One or more of your devices are scheduled for maintenance.",
                        "text2": "to view."
                    },
                    "firewall_management": {
                        "title": "Firewall Management",
                        "text": "View the health of your firewall device, download configuration files, or raise a service request."
                    },
                    "security_monitoring": {
                        "title": "Security Monitoring",
                        "text": "View the status or raise a new service incident request."
                    }
                }
            },
            "user_notification": {
                "new_user_templace": {
                    "text1": "Welcome to your email security portal. This portal allows you to search your personal Archive, view quarantined mail, manage your personal white\/black lists, and continue to send and receive email in the event of a mail server outage or for situations when you are unable to access email. This portal can be accessed by navigating to"
                }
            },
            "password_reset": {
                "text1a": "We have received a password change request for your Email Security account,",
                "text1b": ". If you made this request, then please click on the link below."
            }
        },
        "UK": {
            "nsc": {
                "home": {
                    "title": "Welcome to the Security Management Console (SMC)",
                    "select": "Select one of the actions below.",
                    "no_available_services": "Please contact your system administrator to grant you access to Managed Security Services",
                    "general_overview": {
                        "title": "General Overview",
                        "text": "Device overview and summary information, this includes device health, executive summary reports, and any incident tickets."
                    },
                    "viewpoint": {
                        "title": "ViewPoint",
                        "text": "Navigate to existing ViewPoint services and reports. These include previously available data and functionality.",
                        "button": "Go to ViewPoint"
                    },
                    "network_services": {
                        "title": "Network Services",
                        "text": "Select one of the services below to view recent logs and events."
                    },
                    "firewall_management": {
                        "title": "Managed Firewall",
                        "text": "View the health of your firewall device, download configuration files, or raise a service request."
                    },
                    "security_monitoring": {
                        "title": "Security Monitoring",
                        "text": "View the status or raise a new service incident request."
                    }
                },
                "maintenance": {
                    "warning": {
                        "click_here": "Click Here",
                        "title": "Maintenance:",
                        "text1": "One or more of your devices are scheduled for maintenance.",
                        "text2": "to view."
                    },
                    "firewall_management": {
                        "title": "Managed Firewall",
                        "text": "View the health of your firewall device, download configuration files, or raise a service request."
                    },
                    "security_monitoring": {
                        "title": "Security Monitoring",
                        "text": "View the status or raise a new service incident request."
                    }
                }
            },
            "mss": {
                "user_notification": {
                    "new_user_templace": {
                        "text1": "Welcome to your security portal. This portal allows you to view the health of your firewall device, download configuration files, or raise a service request, and view the status or raise a new service incident request. This portal can be accessed by navigating to"
                    }
                },
                "password_reset": {
                    "text1a": "We have received a password change request for your Managed Security account,",
                    "text1b": ". If you made this request, then please click on the link below."
                }
            },
            "eps": {
                "user_notification": {
                    "new_user_templace": {
                        "text1": "Welcome to your email security portal. This portal allows you to view quarantined mail, manage your personal white\/black lists, and continue to send and receive email in the event of a mail server outage or for situations when you are unable to access email. This portal can be accessed by navigating to"
                    }
                },
                "password_reset": {
                    "text1a": "We have received a password change request for your Email Security account,",
                    "text1b": ". If you made this request, then please click on the link below."
                }
            }
        },
        "nav_label": {
            "access_control": "Access Control",
            "account": "Account",
            "account_details": "Account Details",
            "admin_quarantine": "Admin Quarantine",
            "advanced_policy": "Advanced Policy",
            "social_engineering_protection": "Social Engineering Protection",
            "policy_overview": "Policy Overview",
            "anti_spam": "Anti-Spam",
            "anti_virus_av": "Anti-Virus AV",
            "archive": "Archive",
            "archiving": "Archiving",
            "audit_log": "Audit Log",
            "document_manager": "Documents",
            "branding_options": "Branding Options",
            "change_password": "Change Password",
            "configuration_reports": "Configuration Reports",
            "create_partner": "Create Partner",
            "customer_console": "Customer Console",
            "customers": "Customers",
            "customer_announcements": "Customer Announcements",
            "customer_admins": "Customer Administrators",
            "customer_documents": "Customer Documents",
            "dashboard": "Dashboard",
            "device_config_reports": "Device Config Reports",
            "device_dashboard": "Device Dashboard",
            "device_health": "Device Health",
            "devices": "Devices",
            "event_log_dashboard": "Device Dashboard",
            "directory_services": "Directory Services",
            "sync_setup": "Setup",
            "sync_options": "Sync Options",
            "disclaimers": "Disclaimers",
            "dist_list_quarantine": "Distribution List Quarantine",
            "dl_white_and_black_lists": "Distribution List White and Black Lists",
            "distribution_lists": "Distribution Lists",
            "dlp_reference_guide": "DLP Reference Guide",
            "download_reports": "Download Reports",
            "email_encryption": "Email Encryption",
            "email_security": "Email Security",
            "encrypted_email": "Email Encryption",
            "exchange": "Exchange",
            "exec_summary_reports": "Exec Summary Reports",
            "file_downloads": "File Downloads",
            "allservices_all": "All Services",
            "firewall_fw": "Firewall FW",
            "general_overview": "General Overview",
            "inbound_content": "Inbound Content",
            "incident_reports": "Incident Reports",
            "incident_tickets": "Incident Tickets",
            "intrusion_idps": "Intrusion IDPS",
            "knowledge_base": "Knowledge Base",
            "lists": "Lists",
            "policy_lists": "Policy Lists",
            "se_lists": "Social Engineering Protection Lists",
            "central_quarantine": "Central Quarantine",
            "log_collector": "Log Collector",
            "log_management": "Log Management",
            "mail_flow": "Mail Flow",
            "manage_maintenance": "Customer Maintenance",
            "manage_device_maintenance": "Device Maintenance",
            "manage_customers": "Manage Customers",
            "manage_reports": "Manage Reports",
            "manage_partners": "Manage Partners",
            "managed_security": "Managed Security",
            "manager_quarantine": "Manager Quarantine",
            "manual_policy_editor": "Manual Policy Editor",
            "messages": "Messages",
            "my_quarantine": "My Quarantine",
            "my_services": "My Services",
            "my_settings": "My Settings",
            "network_services": "Network Services",
            "notifications": "Notifications",
            "office_365": "Office 365",
            "ous": "OUs",
            "outbound_content": "Outbound Content",
            "partner_lead": "Partner Lead",
            "partners": "Partners",
            "pending_tasks": "Pending Tasks",
            "please_wait": "Please wait...",
            "policy_editor": "Policy Editor",
            "policy_file": "Policy File",
            "policy": "Policy",
            "provisor": "Provisor",
            "publish_history": "Publish History",
            "quarantine_options": "Quarantine Options",
            "quarantine": "Quarantine",
            "response_plans": "Response Plans",
            "mail_routing": "Email Routing",
            "sender_authentication": "Sender Authentication",
            "tap_gateway": "TAP Gateway",
            "soc_eng": "Social Engineering",
            "connection": "Connection",
            "sep_lists": "Social Engineering Lists",
            "message_banners": "Message Banners",
            "soc_delivery": "SOC Delivery",
            "tap_monthly_reports": "TAP Monthly Reports",
            "tutorials": "Tutorials",
            "reports": "Reports",
            "email_security_reports": "Email Security Reports",
            "mailflow_reports": "Mail Flow Reports",
            "mailflow_dashboard": "Mail Flow Dashboard",
            "email_encryption_reports": "Email Encryption Reports",
            "exchange_reports": "Exchange Reports",
            "summary": "Summary",
            "detail": "Detail",
            "administration": "Administrator",
            "folders": "Folders",
            "my_messages": "My Messages",
            "inbox": "Inbox",
            "sent_items": "Sent Items",
            "im": "IM",
            "compliance": "Compliance",
            "by_day": "By Day",
            "by_mailbox": "By Mailbox",
            "assignments": "Assignments",
            "holds": "Holds",
            "configuration": "Configuration",
            "profile": "Profile",
            "organization": "Organization",
            "exclusions": "Exclusions",
            "general_services": "General Services",
            "roles": "Roles",
            "sales_force": "Sales Force",
            "schedule_maintenance": "Customer Maintenance",
            "schedule_device_maintenance": "Device Maintenance",
            "search": "Search",
            "service_support": "Service Requests",
            "setup": "Setup",
            "silversky_mail": "SilverSky Mail",
            "support": "Support",
            "support_ticket": "Support Ticket",
            "system_maintenance": "Maintenance",
            "targeted_attack_protection": "Targeted Attack Protection",
            "templates": "Templates",
            "unknown": "unknown",
            "uploads": "Uploads",
            "user_management": "User Management",
            "user_quarantine": "User Quarantine",
            "users": "Users",
            "viewpoint": "ViewPoint",
            "vpn_ipsec_site_to_site": "Virtual Private Network (IPSec)",
            "vpn_ssl": "Virtual Private Network (SSL)",
            "vpn_ssl_users": "VPN SSL Users",
            "vpn_service": "Virtual Private Network",
            "web_content_filter_wcf": "Web Content Filter WCF",
            "web_security": "Web Security",
            "whats_new": "What&rsquo;s New",
            "whats_new_updated": "What&rsquo;s New <i class=\"icon icon-star\"><\/i><span class=\"sr-only\">(updated)<\/span>",
            "white_and_black_lists": "White and Black Lists",
            "whitelist": "White List",
            "my_white_and_black_lists": "My White and Black Lists",
            "uk": {
                "firewall_management": "Managed Firewall",
                "security_monitoring": "Security Monitoring",
                "incident_reports": "Reports",
                "incident_tickets": "Status",
                "service_support": "Service Requests",
                "support_ticket": "Service Incident"
            }
        },
        "tutorial": {
            "button": {
                "finish": "Finish uploading",
                "preview": "Preview"
            },
            "error": {
                "no_file_selected": "You did not select a file.",
                "no_version_specified": "You did not specify a version.",
                "problem_uploading": "An issue was encountered when trying to upload the tutorial content file"
            },
            "format": {
                "html": "HTML",
                "markdown": "Markdown",
                "plaintext": "Plain text"
            },
            "heading": {
                "upload": "Upload tutorial content"
            },
            "instructions": {
                "upload": {
                    "preview": {
                        "general": "Review the uploaded tutorial content, and then either approve or select a different file.",
                        "specific": "Review the uploaded tutorial content, and then either approve or select a different %format% file."
                    },
                    "start": {
                        "general": "Upload a new tutorial file.",
                        "specific": "Upload a new %format% file."
                    }
                }
            },
            "label": {
                "format": "Format",
                "version": "Version"
            },
            "menu_label": "Tutorial",
            "message": {
                "found": "Found tutorial content",
                "not_found": "No tutorial found content"
            }
        },
        "audit_log_type": {
            "successful_login": "Last Login from %ip_addr%",
            "failed_login": "Last Failed Login"
        },
        "release_notes": {
            "format": {
                "markdown": "Markdown",
                "html": "HTML",
                "plaintext": "Plain text"
            },
            "heading": {
                "upload": "Upload release notes"
            },
            "instructions": {
                "upload": {
                    "start": {
                        "specific": "Upload a new %format% file.",
                        "general": "Upload a new release notes file."
                    },
                    "preview": {
                        "specific": "Review the uploaded release notes, and then either approve or select a different %format% file.",
                        "general": "Review the uploaded release notes, and then either approve or select a different file."
                    }
                }
            },
            "label": {
                "format": "Format",
                "version": "Version"
            },
            "button": {
                "preview": "Preview",
                "finish": "Finish uploading"
            },
            "error": {
                "no_file_selected": "You did not select a file.",
                "no_version_specified": "You did not specify a version.",
                "problem_uploading": "An issue was encountered when trying to upload the release notes file"
            },
            "menu_label": "What&rsquo;s New?",
            "not_found": "The release notes you are looking for cannot be found."
        },
        "template_editing": {
            "button": {
                "open": "Open",
                "preview": "Preview",
                "save": "Save"
            },
            "h2_template_tags": "Template tags",
            "h3_available_tags": "Available tags",
            "info_1": "You can use any of the following tags as placeholders in the template. The placeholders will be customized for each user. For example, if you began template with,",
            "info_2": "Dear <var>{{ firstName }}<\/var> <var>{{ lastName }}<\/var>,",
            "info_3": "then the <var>{{ firstName }}<\/var> and <var>{{ lastName }}<\/var> would be replaced by the user's actual first and last names.",
            "label": {
                "from": "From:",
                "subject": "Subject:"
            },
            "messages": {
                "confirm_overwrite": "This template has not been saved, and will be overwritten. Are you sure you want to continue?",
                "success_save": "The template was successfully saved."
            },
            "please_wait": "Please wait...",
            "template_info": {
                "name": {
                    "new_user_email": "New User Email",
                    "new_user_email.passwords_on": "New User Email w\/ Password Link",
                    "password_reset_email": "Password Reset Email",
                    "password_reset_text": "Password Reset Text Message"
                },
                "tag_description": {
                    "admin_email": "The primary administrator\u2019s email address",
                    "admin_first_name": "The primary administrator\u2019s first name",
                    "admin_last_name": "The primary administrator\u2019s last name",
                    "email": "The user\u2019s email address",
                    "first_name": "The user\u2019s first name",
                    "last_name": "The user\u2019s last name",
                    "password_reset_link": "A link for the user to click on to reset his or her password",
                    "portal_link": "A link to the email security portal",
                    "verification_code": "A verification code for the user to enter to reset his or her password"
                }
            },
            "word_count_tag": "Using approximately <span id=\"chars-used\"><\/span> out of <span id=\"chars-available\">%maxLength%<\/span> characters available."
        },
        "channel_bundle": {
            "audit_log": "Audit Log",
            "edit_customer": {
                "access_allowed": "IP Restricted Access allowed",
                "access_removed": "IP Restricted Access removed",
                "allow_saml_sso": "Allow SAML SSO",
                "saml_sso_heading": "SAML SSO",
                "saml_sso_help": "Once SAML SSO is allowed, the customer may enable it.",
                "allow_restricted_access": "Allow IP Restricted Access",
                "disable_itar_notice": "Turning off US only support will not turn off secure shadowing. Secure shadowing can only be turned off by the customer.",
                "enable_itar": "US only support",
                "enable_roles": "Enable roles",
                "itar_heading": "US Support",
                "hybrid_disabled": "Hybrid email disabled",
                "hybrid_enabled": "Hybrid email enabled",
                "hybrid_heading": "Hybrid Email",
                "hybrid_help": "Allow customers to add other directory sync hosts.",
                "hybrid_label": "Enable Hybrid Email",
                "restricted_access_heading": "IP Restricted Access",
                "restricted_access_help": "Once IP Restricted Access is allowed, the customer may enable it.",
                "roles_disabled_audit": "Roles disabled",
                "roles_enabled_audit": "Roles enabled",
                "roles_heading": "Roles and Permissions",
                "saml_sso_allowed": "SAML SSO allowed",
                "saml_sso_removed": "SAML SSO disabled",
                "other_tag_label": "Linked %type% Tag",
                "support_shadow": "Please shadow the customer to create a support ticket on their behalf"
            },
            "email_service_chooser": {
                "ex_hosted": "SilverSky Hosted Exchange",
                "instructions": "This customer has no services yet. Choose who will be hosting the customer&rsquo;s email service.",
                "on_premises": "On-premises mail server or a third-party provider",
                "silversky_mail": "SilverSky Mail"
            },
            "error": {
                "unauthorized_audit_log": "Unauthorized access to get audit log of "
            },
            "exchange": {
                "owa_url_label": "OWA URL"
            },
            "file_downloads": {
                "no_files_message": "There are no files available to be downloaded.",
                "files": {
                    "archive_anywhere_profile_wizard": {
                        "name": "Archive Anywhere Profile Wizard",
                        "description": "The Archive Anywhere Profile wizard enables you to access email archives natively within the most popular email apps. Messages can be browsed and searched on desktops, laptops, as well as all email-enabled tablets and smartphones. The Profile Wizard will guide you through the configuration process. For more information, please contact your account manager."
                    },
                    "archive_outlook_plugin": {
                        "name": "My Archive Outlook Plugin",
                        "description": "The My Archive Outlook plugin provides end users with seamless archive management from within Microsoft Outlook.<br\/><br\/>  NOTE: Before installing the plugin, you must have <a href='http:\/\/www.microsoft.com\/en-us\/download\/details.aspx?id=30653'>Microsoft .NET 4.5<\/a> and <a href='http:\/\/www.microsoft.com\/en-us\/download\/details.aspx?id=44074'>Visual Studio 2010 Tools for Office Runtime<\/a> installed. My Archive Outlook Plugin does not currently support Two-Factor Authentication."
                    },
                    "email_encryption_outlook_plugin": {
                        "name": "Email Encryption Outlook Plugin",
                        "description": "The Outlook plug-in allows end users to send encrypted email directly from outlook with the click of a button. For more information on Email Encryption or any other product, please contact your account manager. This plugin supports both 32-bit and 64-bit versions of Outlook."
                    },
                    "lync_2010": {
                        "name": "Lync 2010",
                        "description": "Microsoft Lync 2010 provides a single interface that unites voice communications, IM, and audio, video, and Web conferencing into a richer, more contextual offering. For more information, please contact your account manager."
                    },
                    "lync_2013": {
                        "name": "Lync 2013",
                        "description": "Microsoft Lync 2013 gives you instant messaging (IM), audio and video calls, online meetings, availability (presence) information, and sharing capabilities all from one, easy-to-use program. For more information, please contact your account manager."
                    },
                    "report_spam_outlook_plugin": {
                        "name": "Report Spam Outlook Plugin",
                        "description": "With the Report Spam Outlook Plugin, you can report spam email directly from Outlook. Installation note: If you have a previous version (v1.0.0.3 or earlier) of the Report Spam Outlook Plugin installed on your PCs, you must uninstall that previous version prior to installing the current version (v1.0.1.) Using the installer for the OLD version, right-click on the OLD installer and select uninstall. If you do not have the old installer, then use a two-step process: 1) use Windows \"Add\/Remove Programs\" to uninstall the plugin; 2) right-click on the NEW installer and select uninstall, to complete the uninstallation. Once you have successfully un-installed the old version, you may install the current v1.0.1 plugin available on this page. This plugin only supports 32-bit versions of Outlook and will not work on 64-bit versions."
                    }
                }
            },
            "manage_customer": {
                "button_add_customer": "Add Customer",
                "button_find_customer": "Find Customer",
                "button_show_all_customers": "Show all Customers",
                "label_find_customer": "Find Customer",
                "placeholder_search_input": "Enter company name, email address, customer ID or Tag ID.",
                "placeholder_search_tag": "Please input a 4 character tag ID and press enter",
                "tab_customers": "Customers"
            },
            "order": {
                "item_total_label": "Total",
                "quantity_label": "Quantity",
                "total_label": "Order Total"
            },
            "product": {
                "description_label": "Product Description",
                "price_label": "Price",
                "sku_label": "SKU",
                "unit_label": "Unit"
            },
            "service": {
                "add_heading": "Add %description% Service",
                "av_enabled": "Antivirus (AV)",
                "change_primary_email": "Primary Email has been changed to %email%@%domain%",
                "compliance_report_enabled": "Compliance Reports",
                "customer_has_none": "This customer has not been assigned any services.",
                "dashboard_enabled": "Dashboard",
                "drilldown_enabled": "Drilldown and Datamining",
                "incident_investigation_enabled": "Incident Investigation (advanced queries)",
                "enable_advanced_rule_editing": "Enable Advanced Rule Editing",
                "enable_cust_soc_delivery": "Enable Customer SOC Delivery",
                "device_health_monitoring_enabled": "Device Health Monitoring",
                "enable_dlp_promotion": "Enable Default Ruleset",
                "enable_log_delivery_to": "Enable Log Delivery to",
                "enable_manual_rule_editing": "Enable Manual Policy Editing",
                "enable_soc_eng": "Enable Social Engineering Protection",
                "enable_tap_preclick_urls": "Enable Pre-click URLs for TAP (should be enabled for new customers)",
                "enable": "Enable %service%",
                "fw_enabled": "Firewall (FW)",
                "idps_enabled": "Intrusion Detection\/Prevention (IDPS)",
                "network_services_enabled": "Network Services",
                "no_configuration_options": "There are no configuration options for this service.",
                "not_authorized": "You are not authorized to sell any products under this service suite.",
                "remove_special_char": "@ in Primary Domain has been removed",
                "require_av_or_content_filtering": "available after %av% or %content_filtering% has been enabled",
                "require_full_dlp": "available with Full %dlp%",
                "select_destination": "Select destination",
                "update_heading": "Update %description% Service",
                "vpnipsec_enabled": "Virtual Private Network (IPSec)",
                "vpnssl_enabled": "Virtual Private Network (SSL)",
                "vuma_enabled": "Vulnerability Management (VuMa)",
                "wac_enabled": "Web Application Control (WAC)",
                "wcf_enabled": "Web Content Filtering (WCF)",
                "device_management_enabled": "Device\/Firewall Management",
                "default_landing_page": "Default Landing Page",
                "esr_file_retention": "ESR File Retention",
                "esr_file_retention_changed": "ESR File Retention Changed From %old% To %new%",
                "esr_file_retention_set": "ESR File Retention Set to %new%",
                "esr_file_retention_tooltip": "Max number of ESR Files to retain in the File Repository. Set to 0 or leave blank for unlimited files",
                "esr_file_retention_units": "Files",
                "landing_page": {
                    "dashboard": "Dashboard",
                    "system_default": "System Default"
                }
            },
            "warning": {
                "address_is_required": "Address is required",
                "admin_confirm_pwd_is_required": "Administrator passwords do not match",
                "admin_email_is_required": "Administrator email is required",
                "admin_first_name_is_required": "Administrator first name is required",
                "admin_last_name_is_required": "Administrator last name is required",
                "admin_pwd_is_required": "Administrator password is required",
                "allow_module_before_sub_module": "You must enable %main_module% before enable %sub_module%",
                "city_is_required": "City is required",
                "company_is_required": "Company is required",
                "country_is_required": "Country is required",
                "email_is_required": "Email is required",
                "first_name_is_required": "First name is required",
                "last_name_is_required": "Last name is required",
                "postcode_is_required": "Postcode is invalid",
                "primary_domain_is_required": "Primary domain is required",
                "state_is_required": "State is required",
                "tagId_is_required": "Tag ID is required",
                "timezone_city_is_required": "Timezone city is required",
                "timezone_region_is_required": "Timezone region is required",
                "user_confirm_pwd_is_required": "User passwords do not match",
                "user_pwd_is_required": "User password is required",
                "work_phone_is_required": "Work phone is required",
                "enable_roles": "Roles and permissions should be enabled for all new customers."
            }
        },
        "common_interface": {
            "audit_log_action": {
                "form": "update"
            },
            "file_downloads": {
                "title": "File Downloads"
            },
            "my_services": {
                "link_controls_description": "Show\/hide menu links:",
                "show_link": "%service% link"
            },
            "shuttle": {
                "edit": "Edit",
                "search": "Search for permissions",
                "select": "Add selected items",
                "selected_items": "Selected items",
                "settings": "settings",
                "show_link": "%service% link",
                "unselect": "Remove selected items",
                "unselected_items": "Unselected items"
            },
            "label": {
                "add_aliases": "Add aliases",
                "add_role": "Add role",
                "administrator": "Administrator",
                "change_password": "Change Password",
                "dashboard": "Dashboard",
                "email_address": "Email Address",
                "first_name": "First Name",
                "last_name": "Last Name",
                "manager_email": "Manager Email",
                "no": "No",
                "none": "none",
                "ou": "OU",
                "others": "Others",
                "password": "Password",
                "password_confirm": "Confirm Password",
                "please_wait": "Please wait ...",
                "roles": "Roles",
                "select_ou": "Select OU",
                "set_vip": "Set as VIP employee",
                "status": "Status",
                "sync_source": "sync source",
                "vip_employee": "VIP Employee",
                "web_proxy_pw": "Web Proxy Password",
                "widget": "Widget",
                "widgets": "Widgets",
                "yes": "Yes"
            },
            "button": {
                "add": "Add",
                "apply_change": "I understand - Apply changes",
                "cancel": "Cancel",
                "close": "Close",
                "create": "Create",
                "delete": "Delete",
                "discard_changes": "Discard changes",
                "download": "Download",
                "edit": "Edit",
                "export": "Export",
                "ok": "OK",
                "reset": "Reset",
                "revert_cancel": "Revert and Cancel",
                "save": "Save",
                "submit": "Submit",
                "test_connection": "Test Connection",
                "upload": "Upload"
            },
            "dashboard": {
                "add_widget": "Add Widget",
                "chart_type": "Chart Type",
                "charts": {
                    "area": "Area Chart",
                    "area_spline": "Spline Chart (Area)",
                    "area_step": "Step Chart (Area)",
                    "bar": "Bar Chart",
                    "donut": "Donut Chart",
                    "gauge": "Gauge Chart",
                    "line": "line Chart",
                    "pie": "Pie Chart",
                    "scatter": "Scatter Plot Chart",
                    "spline": "Spline Chart",
                    "step": "Step Chart"
                },
                "delete_dashboard": "Delete Dashboard",
                "edit_mode": "Edit Mode",
                "end_date": "End Date",
                "error": {
                    "fail_save": "Error Ocurred. Saving Failed.' ",
                    "no_widget": "Widget not available.",
                    "no_content": "Content not available."
                },
                "grid_size": "Grid Size",
                "label": {
                    "dashboard_name": "Dashboard Name"
                },
                "message": {
                    "successful": "Successful",
                    "warning_reset": "You are about to reset your current Dashboard. Do you want to continue?",
                    "warning_delete": "You are about to delete your current Dashboard. Do you want to continue?"
                },
                "no_widget_available": "No widget available",
                "reset_dashboard": "Reset Dashboard",
                "save_dashboard": "Save Dashboard",
                "start_date": "Start Date",
                "timeframe": "Timeframe",
                "update_dashboard": "Update Dashboard",
                "view_mode": "View Mode",
                "widget_picker": "Widget Picker",
                "widget_type": "Widget Type",
                "widgets": {
                    "fw_active_ports": "FW: %limit% Most Active Ports",
                    "fw_active_ports_single": "FW: %limit% Most Active Port",
                    "fw_active_ports_desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    "fw_allow_deny": "FW: Allowed vs. Denied",
                    "fw_allow_deny_desc": "FW: Allowed vs. Denied",
                    "fw_blocked_users": "FW: Top %limit% Blocked Users",
                    "fw_blocked_users_single": "FW: Top %limit% Blocked User",
                    "fw_blocked_users_desc": "FW: %limit% Top Blocked Users",
                    "fw_denied_sources": "FW: Top %limit% Denied Sources",
                    "fw_denied_sources_single": "FW: Top %limit% Denied Source",
                    "fw_denied_sources_desc": "FW: Top %limit% Denied Sources",
                    "fw_denied_targets": "FW: Top %limit% Denied Destinations",
                    "fw_denied_targets_single": "FW: Top %limit% Denied Destination",
                    "fw_denied_targets_desc": "FW: Top %limit% Denied Destinations",
                    "idps_allow_deny": "IDPS: Detected vs. Blocked",
                    "idps_allow_deny_desc": "IDPS: Detected vs. blocked",
                    "idps_event_classifications": "IDPS: Top %limit% Event Classifications",
                    "idps_event_classifications_single": "IDPS: Top %limit% Event Classification",
                    "idps_event_classifications_desc": "IDPS: Top %limit% Event Classifications",
                    "idps_severities": "IDPS: Severity",
                    "idps_severities_desc": "IDPS: Severity",
                    "idps_threat_by_destination_ip": "IDPS: Top %limit% Threats by Destination IP",
                    "idps_threat_by_destination_ip_single": "IDPS: Top %limit% Threat by Destination IP",
                    "idps_threat_by_destination_ip_desc": "IDPS: Top %limit% Threats by Destination IP",
                    "idps_threat_by_source_ip": "IDPS: Top %limit% Threats by Source IP",
                    "idps_threat_by_source_ip_single": "IDPS: Top %limit% Threat by Source IP",
                    "idps_threat_by_source_ip_desc": "IDPS: Top %limit% Threats by Source IP",
                    "idps_top_events": "IDPS: Top %limit% Events",
                    "idps_top_events_single": "IDPS: Top %limit% Event",
                    "idps_top_events_desc": "IDPS: Top %limit% Events",
                    "wcf_allow_deny": "WCF: Allowed vs. Blocked",
                    "wcf_allow_deny_desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "wcf_blocked_categories": "WCF: Top %limit% Blocked Categories",
                    "wcf_blocked_categories_single": "WCF: Top %limit% Blocked Category",
                    "wcf_blocked_categories_desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    "wcf_blocked_sites": "WCF: Top %limit% Blocked Sites",
                    "wcf_blocked_sites_single": "WCF: Top %limit% Blocked Site",
                    "wcf_blocked_sites_desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    "wcf_blocked_users": "WCF: Top %limit% Blocked Users",
                    "wcf_blocked_users_single": "WCF: Top %limit% Blocked User",
                    "wcf_blocked_users_desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                }
            }
        },
        "user_action": {
            "labels": {
                "mark_reviewed": "Mark as Reviewed",
                "already_reviewed": "Reviewed"
            },
            "type": {
                "incident_ticket_review": "Incident Ticket was Reviewed"
            }
        },
        "report": {
            "management": {
                "header": "Manage Reports",
                "create_new": "Create New Report",
                "table": {
                    "status": {
                        "success": "Succeeded",
                        "failure": "Failed",
                        "generating": "Generating",
                        "scheduled": "Scheduled",
                        "scheduled_failure": "Failed",
                        "no_schedule": "-",
                        "rescheduled": "Re-Secheduled",
                        "scheduled_not_submitted": "Not Submitted",
                        "scheduled_ok": "Scheduled",
                        "scheduled_error": "Error",
                        "scheduled_resubmitted": "Re-scheduled"
                    },
                    "loading": "Loading...",
                    "header": {
                        "id": "Report ID",
                        "title": "Report Title",
                        "timeframe": "Timeframe",
                        "schedule": "Schedule",
                        "last_success": "Last Successful Run",
                        "last_status": "Last Run Status",
                        "schedule_next": "Next Run Date",
                        "schedule_status": "Schedule Status",
                        "date_created": "Data Created",
                        "last_date_exported": "Last Run Date",
                        "actions": "Actions"
                    }
                }
            },
            "copy_of": "Copy of %originalTitle%",
            "device_config_report": {
                "label": {
                    "generate_pdf_report": "Would you like to generate a configuration report for %device_name% and the configuration file %config_id%",
                    "generating_report": "Your report is being created. Once complete the report will be available on the 'Configuration Reports'"
                }
            },
            "executive_summary": {
                "alert": {
                    "template_info": "All report templates are listed below. They are used to create report PDFs. Click on any row to edit and\/or re-run a report. Once a report is created, it can be downloaded from the download page.",
                    "timezone_info": "The report will be produced using these dates in the selected Device's time zone",
                    "timezone_info_schedule": "The report will be produced on the selected schedule in the Device's time zone",
                    "delete_warning": "Are you sure you want to delete the report configuration",
                    "device_error_warning": "Unable to retrieve report data"
                },
                "tab_label": {
                    "download": "Download Reports",
                    "elastic": "Scheduled Report Settings",
                    "report_settings": "Report Settings",
                    "standard": "Standard Reports",
                    "archived_reports": "Archived Reports"
                },
                "label": {
                    "all_none": "All\/None",
                    "date_range": "Date Range",
                    "device": "Device",
                    "end_date": "End Date",
                    "mssp": "MSSP",
                    "new_tab": "Open the report in a new tab",
                    "report_title": "Summary Report Title*",
                    "save": "Save",
                    "save_run": "Save & Run",
                    "save_schedule": "Save & Schedule",
                    "schedule": "Schedule",
                    "select_module": "Select Module",
                    "start_date": "Start Date",
                    "title_placeholder": "Please enter the title that will be used in the printable report.",
                    "to": "to"
                },
                "module_label": {
                    "sources": "Sources",
                    "targets": "Targets",
                    "ports": "Ports",
                    "total_conns": "Total Connections",
                    "conns_hour": "Connections per Hour",
                    "traffic_hour": "Traffic per Hour",
                    "interfaces": "Interfaces",
                    "events": "Events",
                    "activity": "Activity",
                    "failed_logins": "Failed Logins",
                    "activity_count": "Activity Count",
                    "users": "Users",
                    "user_totals": "User Totals",
                    "portal_transactions": "Portal Transactions",
                    "blocked_sites": "Blocked Sites",
                    "allowed_sites": "Allowed Sites",
                    "categories": "Categories",
                    "reqs_hour": "Requests per Hour",
                    "sessions": "Sessions"
                },
                "module_count": {
                    "label": "%label% Count",
                    "value": "Top %count%"
                },
                "module_header": {
                    "firewall_allowed": "Allowed",
                    "firewall_denied": "Denied"
                },
                "pdf": {
                    "summary": {
                        "firewall_allowed": "There were a total of %sessions% allowed sessions and %kbs% kilobytes transferred, of which there were %sources% unique sources and %targets% unique targets.",
                        "firewall_denied": "There were a total of %attempts% denied connection attempts, of which there were %sources% unique sources and %targets% unique targets.",
                        "idps": "There were a total of %events% raw ids events, of which there were %signatures% unique signatures, %sources% unique sources and %targets% unique targets.",
                        "sslvpn": "There were a total of %events% vpn events, of which there were %success% user logins, %failed% failed logins, and %kbs% kilobytes transferred over vpn.",
                        "web_filtering": "There were a total of %events% web content events, of which there were %success% accessed hits and %failed% blocked hits.",
                        "none": "There were no events to report during this time period."
                    }
                },
                "interval_message": {
                    "success": "The report %reportTitle% will next run at %time% (UTC %timezone%) <br>"
                },
                "recipient_message": {
                    "plural": "The emails %invalidEmails% are invalid. <br>",
                    "singular": "The email %invalidEmails% is invalid. <br>"
                }
            },
            "message": {
                "successfully_deleted": "The specified report was successfully deleted."
            },
            "error": {
                "contact_admin_for_access": "Please contact your system administrator for access",
                "could_not_delete": "We were unable to delete the specified report.",
                "title_format": "The report title must contain only upper-case and lower-case letters A-Z, numbers and spaces",
                "inactive_device": "The selected device for this report is inactive or no longer exists. A new device has been selected by default.",
                "error_occured": "An error occurred while generating the report",
                "it_contains": "It contains",
                "to_device": "to %device_name%",
                "no_permission_to_download": "Sorry, you do not have permission to download this PDF.",
                "no_permission_to_modify": "Sorry, you do not have permission to modify this report setting."
            },
            "dialog": {
                "save_run": {
                    "generating": {
                        "header": "Generating Report",
                        "body": "Your report is being generated. A link will be emailed to the recipients below."
                    },
                    "finished": {
                        "header": "Report Finished",
                        "body": "Your report has finished. You may go ahead and close this notice."
                    }
                }
            },
            "recipients": {
                "header": "Recipients",
                "email_search": "Email Address(es)",
                "email_search_subtitle": "Enter multiple email addresses separated by commas.",
                "selected": "Email Recipients",
                "unselected": "Available Recipients"
            },
            "timeframe": {
                "label": "Timeframe",
                "day": "Day",
                "week": "Week",
                "month": "Month",
                "quarter": "Quarter",
                "custom": "Custom Date Range"
            },
            "incident": {
                "tab_label": {
                    "summary": "Summary",
                    "security": "Security Tickets",
                    "service": "Service Tickets",
                    "slam": "SLAM Status"
                }
            },
            "email": {
                "subject": {
                    "report_ready": "Your Executive Summary report is ready"
                },
                "report_generated_message": {
                    "part_1": "The Executive Summary Report ",
                    "part_2": " generated successfully. Use the link below to access the report from the Security Management Console.",
                    "part_3": "Note: In order to access an Executive Summary Report you must have administrator credentials for the Security Management Console. If you are unable to login or access to the report is denied, please contact your company administrator."
                }
            },
            "compliance_report": {
                "fw": {
                    "title": "FW Compliance Report"
                },
                "idps": {
                    "title": "IDPS Compliance Report"
                },
                "wcf": {
                    "title": "WCF Compliance Report"
                }
            }
        },
        "device_health": {
            "custom_device_form": {
                "save_btn": "Save",
                "label": "Custom Device Name",
                "notification": {
                    "access_denied": "You do not have permission to edit device",
                    "device_data_not_found": "Failed to save Custom Device Name, device data not found",
                    "failed": "Failed to save Custom Device Name",
                    "roles_data_not_found": "Failed to save Custom Device Name, customer roles data not found",
                    "success": "Custom Device Name successfully applied"
                }
            },
            "custom_device_name": {
                "not_set": ""
            },
            "device_picker": {
                "custom_device_name": "Custom Device Name",
                "external_ip": "External IP",
                "location": "Location",
                "name": "Name",
                "timezone": "Timezone",
                "vendor": "Vendor"
            },
            "diff_tool": {
                "button": {
                    "export": "Export"
                },
                "desc": "Use the tool below to compare two configuration files and view the changes between versions.",
                "modal_box": {
                    "button": {
                        "export_all": "Export All",
                        "export_diff_only": "Export Diff Only"
                    },
                    "body": "You can select to export the entire report as show or export only the changes made between the two selected configurations.",
                    "header": "Export Option"
                },
                "modal_estimate_box": {
                    "button": {
                        "cancel": "Cancel",
                        "continue": "Continue"
                    },
                    "body": "Please take note, this process may take a few minutes",
                    "header": "Compare configuration"
                },
                "notification": {
                    "diff_long_process_time": "DCR Diff process will take some time",
                    "diff_normal_process_time": "Starting DCR Diff process"
                }
            },
            "timeframe": {
                "label": "Show trends for previous: ",
                "day": "Day",
                "week": "Week",
                "month": "Month",
                "quarter": "Quarter",
                "year": "Year",
                "timezone": "Time Zone"
            },
            "title": {
                "average_cpu_load": "AVERAGE<br>CPU LOAD",
                "cpu": "CPU",
                "device_details": "Device Details",
                "device_health": "Device Health",
                "interface": "Interface",
                "language_term": "Device Health",
                "language_terms": "Devices Health",
                "memory": "Memory",
                "memory_used": "MEMORY<br>USED",
                "network": "Network",
                "network_usage": "Network Usage",
                "node_custom_details": "Custom Properties for Nodes",
                "node_details": "Node Details",
                "receive": "Receive",
                "status": "Status",
                "time": "Time",
                "transmit": "Transmit"
            },
            "stats": {
                "can_edit_device": "Edit device",
                "city": "City",
                "country": "Country",
                "cpu": "CPU Usage",
                "custom_device_name": "Custom Device Name",
                "description": "Description",
                "device_id": "Device ID",
                "device_name": "Device Name",
                "id": "Device ID",
                "ip_address": "IP Address",
                "location": "City",
                "machine_type": "Machine Type",
                "maint": "Maintenance",
                "memory": "Memory Usage",
                "ram": "Memory Usage",
                "services": "Services",
                "software_version": "Software Version",
                "status": "Status",
                "status_down": "Node is down",
                "status_missing": "Node not found",
                "status_up": "Node is up",
                "tab_title": "Custom Device Name",
                "timezone": "Timezone",
                "vendor": "Description"
            },
            "performance": {
                "cpu": "CPU Usage",
                "memory": "Memory Usage"
            },
            "messages": {
                "current_selection_description": "Based on a location of: %location% and a device type of: %type%",
                "timeframe_day": "All data is displayed in GMT\/UTC",
                "last_updated": "Last updated: %time%"
            },
            "select": {
                "device": "Select a device",
                "devices": "Select Devices",
                "version": "Select a version"
            },
            "error": {
                "connection_error": "Unable to contact device health database.",
                "could_not_locate_configuration_file": "Could not locate configuration file",
                "device_not_found": "No data for selected device.",
                "default": "Device data missing or corrupted.",
                "connecting_to_report_generator_service": "Error connecting to report generator service",
                "unknown_device_vendor": "Unknown device vendor"
            },
            "maintenance": {
                "email_subject": "[SMC-MS] A maintenance window has been scheduled",
                "email_body_text1": "A maintenance window has been scheduled for one or more of your security devices. Please logon to the",
                "email_body_text2": "to review the schedule.\\n\\nIf you have received this email in error, please delete it immediately. This e-mail is sent from a notification only address that cannot accept incoming e-mail. Please do not reply to this message.\\nIf you have any questions, please contact your Security Operation Center by phone or through the customer portal.",
                "email_body_html1": "<p>A maintenance window has been scheduled for one or more of your security devices. Please logon to the ",
                "email_body_html2": "to review the schedule.<br><br>If you have received this email in error, please delete it immediately. This e-mail is sent from a notification only address that cannot accept incoming e-mail. Please do not reply to this message.<br>If you have any questions, please contact your Security Operation Center by phone or through the customer portal.<br><\/p>",
                "title": "A maintenance window has been scheduled for this device:",
                "start_time": "Start:",
                "end_time": "End:",
                "desc": "Description:"
            },
            "report": {
                "dcr_title": "Device Configuration Report"
            }
        },
        "device_report_bundle": {
            "button": {
                "submit": "Submit"
            },
            "error": {
                "access_denied": "You do not have permission to access %wcf_access%.",
                "comment_submit_failed": "Your comment was not successfully submitted.",
                "device_list_error": "Could not get the list of devices.",
                "error": "Error",
                "invalid_header": "Invalid request header.",
                "no_device_selected": "No device is currently selected. Please select a device.",
                "permission_required": "Please contact your system administrator to grant you access to WCF Self Configuration.",
                "restricted": "This feature is not available for the currently selected customer.",
                "restricted_header": "Restricted",
                "solarwinds_category_filters": "Unable to get category filters.",
                "solarwinds_config_error": "The device you selected is not configured as monitored equipment. Please submit a support ticket for more information (SW).",
                "solarwinds_config_error_devicehealth": "The following is not configured as monitored equipment. Please submit a support ticket for more information (SW):",
                "solarwinds_config_incomplete": "The device you selected is not fully configured in the monitored equipment. Please submit a support ticket for more information (SW).",
                "solarwinds_error": "An error occurred while communicating with Solarwinds.",
                "solarwinds_static_urls": "Unable to get static URLs.",
                "sp_char_not_allowed": "Special Characters Not Allowed",
                "wcf_settings_error": "Could not get WCF settings.",
                "wcf_vendor_firmware_not_supported": "Vendor or Firmware Version is not supported.",
                "generate_compliance_error": "An error occurred generating Compliance Report. Please contact your System Administrator for help."
            },
            "alert": {
                "empty_fields": "Please fill up the following fields:",
                "query_window_selected_size": "Your query was aproximately %size% days.",
                "query_window_too_big": "Please limit your query to %window% days.",
                "unauthorized_access": "Unauthorized Access.",
                "unsaved_changes": "There are unsaved changes. Do you really want to leave the page?",
                "warning_unsaved_changes": "Warning: Unsaved changes"
            },
            "label": {
                "action": "Action",
                "activity": "Activity",
                "analysis": "Analysis",
                "bytes": "Bytes",
                "category": "Category",
                "begin_investigation": "Investigate",
                "classification": "Classification",
                "compare_config": "Compare Configurations",
                "config_files": "Configuration Files",
                "configuration_reports": "Configuration Reports",
                "date_time": "Date\/Time",
                "destination_ip": "Destination IP",
                "destination_port": "Destination Port",
                "destination_url": "Destination URL",
                "device": "Device",
                "device_group": "Device Group",
                "device_product": "Device Product",
                "direction": "Direction",
                "version": "Version",
                "event": "Events",
                "event_alert_type": "Event\/Alert Type",
                "group_by": "Group By",
                "include_terms": "Include the following terms",
                "list_of_tickets": "List of tickets",
                "message": "Message",
                "method": "Method",
                "name": "name",
                "new_service_request": "New Service Request",
                "new_support_ticket": "New Support Ticket",
                "new_service_incident": "New Service Incident",
                "new_service_support_UK": "New Service Incident",
                "new_service_support_US": "New Support Ticket",
                "overview": "Overview",
                "period": "Period",
                "print": "Print",
                "print_preview": "Print Preview",
                "protocol": "Protocol",
                "report": "Report",
                "risk": "Risk",
                "select_activity": "Select Activity",
                "select_category": "Select Category",
                "select_device": "Select Device",
                "select_report": "Select Report",
                "select_service_investigate": "Select the following services to investigate",
                "service_type": "Service Type",
                "severity": "Severity",
                "site_category": "Site Category",
                "source_ip": "Source IP",
                "source_port": "Source Port",
                "ticket_note": "This ticket <a href=\"%link%\">#%ticId%<\/a> was created on <span id=\"localtime-%ticId%\"><\/span>",
                "ticket_note2": "Use the settings below to find additional possibly related events.",
                "time_frame": "Time frame",
                "trend_details": "Trend Details",
                "trend_type": "Trend Type",
                "type": "Type",
                "user": "Users",
                "username": "Username",
                "warning": "Warning",
                "week": "Week"
            },
            "priority": {
                "high": "High",
                "low": "Low",
                "medium": "Medium",
                "info": "Info"
            },
            "select": {
                "add": "Add",
                "fw_allow_vs_deny": "Allow vs Deny",
                "fw_bandwidth_usage": "Bandwidth Usage",
                "day": "Day",
                "hour": "Hour",
                "main": "Main",
                "min_after": "%min% minute after",
                "min_before": "%min% minute before",
                "month": "Month",
                "quarter": "Quarter",
                "remove": "Remove",
                "select_next_device": "Select the next device",
                "select_prev_device": "Select the previous device",
                "week": "Week",
                "year": "Year",
                "all_devices": "All Devices"
            },
            "selector": {
                "back": "Back to ticket #",
                "search": "Search for devices",
                "title": "Select a Device",
                "unknown_device_value": ""
            },
            "service_request": {
                "description": {
                    "default_desc": " by : %userEmail%. ",
                    "on_behalf_desc": " on behalf of %userEmail% by %shadowEmail%. ",
                    "technical_desc": " Technical contact provided : %techEmail%. "
                },
                "message": {
                    "ticket_submit_success": "Support Ticket #%ticket_number% was successfully submitted.",
                    "ticket_submit_failed": "Your ticket was not successfully submitted, please check your form and try again.",
                    "ticket_approve_success": "Sucessfully Approved Ticket",
                    "ticket_unapprove_success": "Sucessfully Unapproved Ticket",
                    "ticket_approve_failure": "Failed to  Approved Ticket"
                }
            },
            "support_ticket_priority_tag": {
                "1": "High",
                "2": "Medium",
                "3": "Low",
                "4": "Info"
            },
            "incident_ticket_priority_tag": {
                "1": "Info",
                "2": "Low",
                "3": "Medium",
                "4": "High"
            },
            "service_support": {
                "request": {
                    "label": {
                        "3rd_party_contact_email": "3rd Party Contact Email",
                        "3rd_party_contact_name": "3rd Party Contact Name",
                        "3rd_party_contact_number": "3rd Party Contact Number",
                        "3rd_party_contact_example": "Example: +44123456789",
                        "3rd_party_device_type": "3rd Party Device Type",
                        "3rd_party_peer_address": "3rd Party Peer Address",
                        "3rd_party_site_address": "3rd Party Site Address",
                        "IKE_DH_group": "IKE DH Group",
                        "IKE_authentication_algorithim": "IKE Auth Algorithim",
                        "IKE_authentication_method": "IKE Auth Method",
                        "IKE_lifetime": "IKE Lifetime (seconds)",
                        "IKE_lifetime_kilobytes": "IKE Lifetime Kilobytes",
                        "IPSEC_authentication_algorithm": "IPSEC Authentication Algorithm",
                        "IPSEC_encapsulation_mode": "IPSEC Encapsulation Mode",
                        "IPSEC_encryption": "IPSEC Encryption",
                        "IPSEC_lifetime_kilobytes": "IPSEC Lifetime Kilobytes",
                        "IPSEC_lifetime_seconds": "IPSEC Lifetime (seconds)",
                        "IPSec_SA_lifetime": "IPSEC SA Lifetime",
                        "NAT_Traversal": "NAT Traversal",
                        "account_action": "Action",
                        "account_email": "Account Email",
                        "account_role_level": "Account Role Level",
                        "account_contact_phone": "Account Contact",
                        "application_protocol": "Application Protocol",
                        "category": "URL Category",
                        "customerEmail": "Email",
                        "customerName": "Name",
                        "customerPhone": "Phone",
                        "dead_peer_detection": "Dead Peer Detection",
                        "destination_address": "Destination Address",
                        "destination_domain": "Destination Domain",
                        "destination_zone": "Destination Zone",
                        "device_name": "Device Name",
                        "diffie_hellman_group": "Diffie Hellman Group",
                        "enable_replay_detection": "Enable Replay Detection",
                        "encryption_algorithm_phase1": "Encryption Algorithm",
                        "encryption_algorithm_phase2": "Encryption Algorithm",
                        "hash_algorithm_phase1": "Hash Algorithm",
                        "hash_algorithm_phase2": "Hash Algorithm",
                        "interfaces": "Interfaces",
                        "negotiation_mode_IKEv1": "Negotiation Mode",
                        "negotiation_mode_IKEv2": "Negotiation Mode",
                        "next_hop_address": "Next Hop Address",
                        "next_hop_interface": "Next Hop Interface",
                        "perfect_forward_secrecy": "Perfect Forward Secrecy",
                        "policy_action": "Policy Action",
                        "policy_logging": "Logging",
                        "policy_name": "Policy Name",
                        "policy_port": "Port",
                        "priority": "Expedite",
                        "protocol": "Protocol",
                        "reboot_action": "Reboot Action",
                        "remote_encryption_domain": "Remote Encryption Domain",
                        "select_tech_name": "Change Control Authority",
                        "service_buttons": {
                            "cancel": "Cancel",
                            "send_request": "Send Request"
                        },
                        "service_description": "Request Description",
                        "service_request_type": "Service Request Type",
                        "source_address": "Source Address",
                        "source_zone": "Source Zone",
                        "static_route": "Route",
                        "static_route_metric": "Metric",
                        "tech_email": "Email",
                        "tech_phone": "Phone",
                        "url": "URL"
                    },
                    "legend": {
                        "customer_info": "Customer Information",
                        "other_params": "Other Parameters",
                        "phase1": "Phase 1",
                        "phase2": "Phase 2",
                        "request_details": "Request Details"
                    },
                    "required": "(required)",
                    "value": {
                        "IKE_authentication_algorithim": {
                            "placeholder": "Select an algorithm..."
                        },
                        "IPSEC_authentication_algorithm": {
                            "placeholder": "Select an algorithm..."
                        },
                        "account_action": {
                            "placeholder": "Select an action..."
                        },
                        "device_name": {
                            "placeholder": "Select a device..."
                        },
                        "diffie_hellman_group": {
                            "placeholder": "Select a group..."
                        },
                        "disabled": "Disabled",
                        "enabled": "Enabled",
                        "encryption_algorithm_phase1": {
                            "placeholder": "Select an algorithm..."
                        },
                        "encryption_algorithm_phase2": {
                            "placeholder": "Select an algorithm..."
                        },
                        "hash_algorithm_phase1": {
                            "placeholder": "Select an algorithm..."
                        },
                        "hash_algorithm_phase2": {
                            "placeholder": "Select an algorithm..."
                        },
                        "negotiation_mode_IKEv1": {
                            "aggressive": "Aggressive",
                            "main": "Main",
                            "placeholder": "Select a mode..."
                        },
                        "negotiation_mode_IKEv2": {
                            "aggressive": "Aggressive",
                            "main": "Main",
                            "plceholder": "Select a mode"
                        },
                        "perfect_forward_secrecy": {
                            "no": "No",
                            "yes": "Yes"
                        },
                        "policy_action": {
                            "deny": "Deny",
                            "permit": "Permit",
                            "placeholder": "Select an action..."
                        },
                        "policy_logging": {
                            "off": "Off",
                            "on": "On",
                            "placeholder": "Select a logging option..."
                        },
                        "priority": {
                            "no": "No",
                            "placeholder": "Select an expedite option...",
                            "yes": "Yes"
                        },
                        "reboot_action": {
                            "placeholder": "Select an action...",
                            "reboot": "Reboot",
                            "shutdown": "Shutdown"
                        },
                        "select_tech_name": {
                            "placeholder": "Select an authority..."
                        },
                        "service_request_type": {
                            "IPS_rule_creation": "IPS Rule Creation",
                            "IPSec_VPN1": "IPSec VPN IKEv1",
                            "IPSec_VPN2": "IPSec VPN IKEv2",
                            "URL_categorization": "URL Categorization",
                            "URL_whitelist": "URL Whitelist",
                            "account": "Account add\/change",
                            "block_unblock_endpoint": "Block\/Unblock Endpoint",
                            "check_device_parameter": "Check Device Parameter",
                            "check_device_vulnerability": "Check Device Vulnerability",
                            "general": "General",
                            "hardware_replacement": "Hardware Replacement",
                            "interface": "Interface",
                            "license_application": "License Application",
                            "placeholder": "Select a request type...",
                            "reboot_shutdown_device": "Reboot Shutdown Device",
                            "remote_access_vpn": "Remote Access VPN",
                            "routing_config": "Routing Configuration",
                            "rule_policy_change": "Rule or Policy Change",
                            "static_route": "Static Route",
                            "system_setting": "System Setting",
                            "upgrade_major": "Upgrade - Major",
                            "upgrade_minor": "Upgrade - Minor",
                            "upgrade_signature": "Upgrade Signature"
                        }
                    }
                }
            },
            "services": {
                "fw": "Firewall",
                "idps": "IDPS",
                "vpn_ipsec": "VPN IPSec",
                "vpn_users": "VPN Users",
                "wcf": "Web Content"
            },
            "summary": {
                "date_range": "The following is for any tickets updated in the last %count% days",
                "els_error": "The search service is currently unavailable. Please try your request again later.",
                "firewall": {
                    "active_ports": "Most Active Ports",
                    "allowed_denied": "Allowed vs. Denied",
                    "denied_sources": "Top %count% Denied Sources",
                    "denied_targets": "Top %count% Denied Destinations",
                    "table": {
                        "connection": "Connection",
                        "denies": "Number of Denies",
                        "ip": "IP Address",
                        "percent_total": "% of Total",
                        "port": "Port",
                        "protocol": "Protocol"
                    },
                    "widget": {
                        "all": "All Firewall Hits",
                        "allowed": "Allowed",
                        "denied": "Denied"
                    }
                },
                "idps": {
                    "detected_blocked": "Detected vs. Blocked",
                    "table": {
                        "signature": "Signature",
                        "classification": "Classification",
                        "event_alert": "Events\/Alerts",
                        "count": "Count",
                        "percent_total": "% of Total",
                        "ip": "IP",
                        "total": "Total",
                        "severity": "Severity"
                    },
                    "widget": {
                        "all": "Total IDPS Events",
                        "detected": "Total Detected Events",
                        "blocked": "Total Blocked Events"
                    }
                },
                "top_threats_by_source_ip": "Top %count% Threats By Source IP",
                "top_threats_by_destination_ip": "Top %count% Threats By Destination IP",
                "top_severity": "Severity",
                "top_classifications": "Top %count% Event Classifications",
                "top_events": "Top %count% Events",
                "widget": {
                    "all": "Total IDPS Events",
                    "blocked": "Total Blocked Events",
                    "detected": "Total Detected Events"
                },
                "ipsec": {
                    "table": {
                        "count": "Count",
                        "percent_total": "% of Total",
                        "source": "Source IP",
                        "target": "Destination IP"
                    },
                    "top_sources": "Top %count% VPN Sources",
                    "top_targets": "Top %count% VPN Destinations",
                    "vpn_stats": "VPN Statistics",
                    "widget": {
                        "all": "Total VPN Events",
                        "delete": "Total VPN Delete",
                        "install": "Total VPN Install"
                    }
                },
                "no_data": "No Data",
                "vpn": {
                    "login_stats": "VPN Login Statistics",
                    "table": {
                        "count": "Count",
                        "percent_total": "% of Total",
                        "source": "Source IP",
                        "target": "Destination IP",
                        "username": "Username"
                    },
                    "top_sources": "Top %count% VPN Sources",
                    "top_targets": "Top %count% VPN Destinations",
                    "top_users": "Top %count% VPN Users",
                    "widget": {
                        "all": "Total VPN Events",
                        "denied": "Total VPN Login Denied",
                        "granted": "Total VPN Login Granted"
                    }
                },
                "wcf": {
                    "allowed_blocked": "Allowed vs. Blocked",
                    "blocked_categories": "Top %count% Blocked Categories",
                    "blocked_sites": "Top %count% Blocked Sites",
                    "blocked_users": "Top %count% Blocked Users",
                    "table": {
                        "category": "Category",
                        "count": "Count",
                        "percent_total": "% of Total",
                        "site_url": "Site URL",
                        "username": "Username"
                    },
                    "widget": {
                        "accessed": "Accessed",
                        "activity_header": "Total, Blocked, Accessed",
                        "all": "All Hits",
                        "allowed": "Allowed",
                        "blocked": "Blocked"
                    }
                }
            },
            "policy_definition": {
                "title": "Policy Definition"
            },
            "profile_configuration": {
                "comment": {
                    "hint": "You have entered an invalid comment.",
                    "invalid_comment": "You have entered an invalid Profile Comment. Please check the item in red. Max characters are 255 characters and only Alphanumeric, dash (-), underscore (_), period (.) and spaces are allowed.",
                    "label": "Comment"
                },
                "device": {
                    "is_updating": "The configuration for this device is currently being updated. This may take a few minutes. Please wait and then refresh this page.",
                    "label": "Select a Device"
                },
                "title": "Profile Configuration",
                "select": {
                    "action": {
                        "title": "Select an Action",
                        "values": {
                            "1": "Select a Profile",
                            "2": "Block",
                            "3": "Monitor",
                            "4": "Mixed",
                            "5": "Exempt"
                        }
                    },
                    "device": {
                        "title": {
                            "default": "Select a Device",
                            "no_device": "No device available"
                        }
                    },
                    "profile": {
                        "title": {
                            "default": "Select a Profile",
                            "no_profile": "No profile available"
                        }
                    },
                    "type": {
                        "title": "Select a Type"
                    }
                },
                "static_url_filters": {
                    "input": {
                        "url_hint": "You have entered an invalid URL."
                    },
                    "label": "Static URL Filters",
                    "panel": {
                        "note": "\"http:\/\/\" or \"https:\/\/\" is not required and trailing \"\/\" will be automatically removed.<br \/>Example: <i>www.address.yx, talk.address.yx, www.address.yx\/news<\/i>",
                        "title": "Edit Static URL Filters"
                    },
                    "save": {
                        "modal": {
                            "title": {
                                "default": "Editing Static URL Filters",
                                "error": "Error"
                            },
                            "message": {
                                "default": "Please provide a description \/ Reasons for this change:",
                                "invalid_url": "You have entered an invalid URL. Please check the item in red.<br \/>\"http:\/\/\" or \"https:\/\/\" is not required and trailing \"\/\" will be automatically removed.",
                                "warning": "Warning: This action will update the policy on your device",
                                "success": "<h2>Successful<\/h2>WCF Configuration has been updated.",
                                "error": "Some required values are not correct. Please check the items in red.",
                                "duplicate": "We have found duplication in URL. Please check the fields in red and try again.",
                                "no_permission": "No permission to update Static URL Filters"
                            }
                        }
                    }
                },
                "profile": {
                    "label": "Profile"
                },
                "category_filters": {
                    "title": "Edit Category Filters",
                    "label": "Category Filters",
                    "panel": {
                        "title": "Edit Category Filters"
                    },
                    "save": {
                        "modal": {
                            "title": {
                                "default": "Editing Category Filters"
                            },
                            "message": {
                                "default": "Please provide a description \/ Reasons for this change:",
                                "warning": "Warning: This action will update the policy on your device",
                                "success": "<h2>Successful<\/h2>WCF Configuration has been updated.",
                                "no_permission": "No permission to update Category Filters"
                            }
                        }
                    }
                }
            },
            "compliance_report": {
                "description": "Use the options below to select the type of report and the desired timeframe.",
                "table": {
                    "date_created": "Date Created",
                    "device": "Device",
                    "fw_title": "FW Compliance Report",
                    "idps_title": "IDPS Compliance Report",
                    "period": "Period",
                    "report_type": "Report Type",
                    "timeframe": "Timeframe",
                    "wcf_title": "WCF Compliance Report"
                },
                "title": "Compliance Report"
            },
            "dashboard": {
                "notifications": {
                    "setting_deleted": "Dashboard setting deleted.",
                    "setting_updated": "Dashboard setting updated."
                }
            },
            "users_groups": {
                "title": "Users and Groups"
            },
            "table": {
                "all_title": "All Services",
                "av_title": "Anti Virus",
                "dcr_title": "Device Configuration Reports",
                "esr_title": "Executive Summary Report",
                "service_request_title": "Service Request",
                "fw_title": "Firewall",
                "id_title": "Intrusion Detection",
                "ips_title": "IP Security",
                "it_title": "Incident Tickets",
                "ssl_title": "Secured Socket Layer",
                "sst_title": "Support Tickets",
                "sit_title": "Service Incident",
                "wcf_title": "Web Content Filtering"
            },
            "tabs": {
                "all_services": "All Services Detailed Reporting",
                "dashboard": "Dashboard",
                "detailed": "Detailed Reporting",
                "list_of_tickets": "List of Tickets",
                "overview": "Overview",
                "summary": "Summary",
                "trend": "Trend Reporting"
            },
            "drilldown_details": {
                "table_headings": {
                    "value": "Value",
                    "column": "Column"
                },
                "column_headings": {
                    "g_date": "Date",
                    "g_hour": "Hour",
                    "g_hostname": "Hostname",
                    "nsm_type": "Event Type",
                    "s_ip": "Source IP",
                    "t_ip": "Target IP",
                    "t_port": "Target Port",
                    "transport_proto": "Transport Protocol",
                    "in_interface": "Inbound Interface",
                    "out_interface": "Outbound Interface",
                    "group_id": "Group ID",
                    "user_id": "User ID",
                    "object_name": "Object Name",
                    "object_access": "Object Access",
                    "http_hostname": "HTTP Hostname",
                    "uri": "URI",
                    "s_port": "Source Port",
                    "s_bytes": "Source Bytes",
                    "t_bytes": "Target Bytes",
                    "duration": "Duration Seconds",
                    "g_timestamp": "Timestamp",
                    "device_id": "Device ID",
                    "event_id": "Event ID",
                    "process_executable": "Process Executable",
                    "corr_count": "Correlation Count",
                    "alert_id": "Alert ID",
                    "malware_id": "Malware ID",
                    "t_hostname": "Target Hostname",
                    "s_hostname": "Source Hostname"
                }
            },
            "response_plans": {
                "tab_headings": {
                    "security": "Security",
                    "non_technical": "Non-Technical",
                    "technical_support": "Technical Support",
                    "after_hours": "After Business Hours",
                    "business_hours": "During Business Hours"
                },
                "contact_headings": {
                    "primary": "Primary Contact",
                    "secondary": "Secondary Contact",
                    "other": "Additional Contact",
                    "admin": "Administrative Contact",
                    "business": "Billing Contact",
                    "email": "Email",
                    "pager": "Pager",
                    "name": "Name",
                    "phone": "Office Phone",
                    "cellphone": "Cell Phone",
                    "otherphone": "Other",
                    "notes": "Notes"
                },
                "instructions": {
                    "block_intruder": "Block Intruder First",
                    "communicate_with_contact": "Communicate activity with Primary Contact",
                    "post_incident": "Post incident to client portal or email customer notification",
                    "low_info_level_attacks": {
                        "heading": "1-Low\/Informational-Non-intrusive",
                        "description_low": "Low issues are alerts that alone might not constitute a major risk but should be monitored for repeat occurrences. An example of a minor issues would be a failed login to a system or a single port scan occurrences.",
                        "description_informational": "Informational issues are any activity that should be brought to the customer's attention or many cause future problems to a device. An example could include such items as device or line utilization reaching peak levels."
                    },
                    "medium_high_level_attacks": {
                        "heading": "2\/3-Medium\/High-Attack",
                        "description_medium": "Medium Issues are alerts that have occurred in succession or resemble an unauthorized attempt to access a system. An example of a major risk would be multiple unsuccessful logins to a device or continuous port scans to the serviced network.",
                        "description_high": "High issues are alerts that denote a possible attack in progress or interruption in service. Such events could be a denial of service attempt, a downed system or total loss of connectivity."
                    }
                },
                "info_labels": {
                    "customer_level": "Customer Level",
                    "company_office_hours": "Company Office Hours",
                    "company_office_hours_separator": " - ",
                    "company_office_hours_open": "OPEN",
                    "company_office_hours_closed": "CLOSED",
                    "time_zone": "Time Zone",
                    "automatically_block": "Automatically Block",
                    "automatically_block_yes": "YES",
                    "automatically_block_no": "NO",
                    "automatically_notify": "Automatically Notify",
                    "automatically_notify_yes": "YES",
                    "automatically_notify_no": "NO"
                }
            },
            "trend_report": {
                "fw": {
                    "modal": {
                        "no_data": "There's no data available."
                    },
                    "graph": {
                        "activity": "Activity",
                        "protocol_inbound_allowed_bytes": "Protocol Usage - Inbound Allowed Bytes",
                        "protocol_inbound_allowed_events": "Protocol Usage - Inbound Allowed",
                        "protocol_inbound_denied_bytes": "Protocol Usage - Inbound Denied Bytes",
                        "protocol_inbound_denied_events": "Protocol Usage - Inbound Denied",
                        "protocol_outbound_allowed_bytes": "Protocol Usage - Outbound Allowed Bytes",
                        "protocol_outbound_allowed_events": "Protocol Usage - Outbound Allowed",
                        "protocol_outbound_denied_bytes": "Protocol Usage - Outbound Denied Bytes",
                        "protocol_outbound_denied_events": "Protocol Usage - Outbound Denied",
                        "protocol_overview_bytes": "Protocol Usage - Overview Bytes",
                        "protocol_overview_events": "Protocol Usage - Overview",
                        "timeframe_title": "Time Frame <span class=\"bold\">%start_date%<\/span> - <span class=\"bold\">%end_date%<\/span>",
                        "title": "%report_type% Trend (Graph)",
                        "traffic_bytes": "Allowed & Deny Analysis - Bytes",
                        "traffic_events": "Allowed & Deny Analysis - Events",
                        "x_tick_daily_label": "hours",
                        "x_tick_monthly_label": "Days",
                        "x_tick_quarterly_label": "Months",
                        "x_tick_weekly_label": "Days",
                        "x_tick_yearly_label": "Months",
                        "y_tick_total_count_label": "Total Count"
                    },
                    "table": {
                        "title": "FW Trend Reporting - %report_detail%"
                    }
                },
                "idps": {
                    "modal": {
                        "no_data": "There's no data available."
                    },
                    "graph": {
                        "activity": "Activity",
                        "alert_activity": "Alert Activity",
                        "compare_activity": "Global",
                        "compare_activity_actual": "Actual",
                        "event_activity": "Event Activity",
                        "event_alert_trend": "Event Alert Trend",
                        "incident_activity": "Incident Activity",
                        "incident_trend": "Incident Trend",
                        "incident_level_1": "Incident Level 1",
                        "incident_level_2": "Incident Level 2",
                        "incident_level_3": "Incident Level 3",
                        "incident_level_4": "Incident Level 4",
                        "incident_level_5": "Incident Level 5",
                        "title": "%report_type% Trend (Graph)",
                        "timeframe_title": "Time Frame <span class=\"bold\">%start_date%<\/span> - <span class=\"bold\">%end_date%<\/span>",
                        "x_tick_daily_label": "hours",
                        "x_tick_monthly_label": "Days",
                        "x_tick_quarterly_label": "Months",
                        "x_tick_weekly_label": "Days",
                        "x_tick_yearly_label": "Months",
                        "y_tick_total_count_label": "Total Count"
                    },
                    "table": {
                        "title": "IDPS Trend Reporting - %report_detail%"
                    }
                },
                "wcf": {
                    "graph": {
                        "title": "Number of %activity% by %report_type%",
                        "timeframe_title": "Time Frame <span class=\"bold\">%start_date%<\/span> - <span class=\"bold\">%end_date%<\/span>",
                        "x_tick_day_label": "Days",
                        "x_tick_hour_label": "Hours",
                        "x_tick_month_label": "Months",
                        "y_tick_hits_label": "Number of Hits"
                    },
                    "scope": {
                        "all_users": "All Users",
                        "specific_user": "Specific Users"
                    },
                    "table": {
                        "column_label_category": "Category",
                        "column_label_protocol": "Protocol",
                        "info_category_singular": "Category",
                        "info_category_plural": "Categories",
                        "info_protocol_singular": "Protocol",
                        "info_protocol_plural": "Protocols",
                        "title": "WCF Trend Reporting - %report_detail%"
                    }
                }
            }
        },
        "warning": {
            "unauthorized_access": "Unauthorized Access",
            "add_new_folder": "Unable to add new folder",
            "delete_document": "Unable to delete document",
            "delete_folder": "Unable to delete folder",
            "error_occurred": "An error has occurred",
            "exception": "Exception : ",
            "failed_duplicated_group_name": "Failed to create document group, duplicated group name ",
            "failed_to_create_document_group_name": "Failed to create document group",
            "load_tree": "Unable to load tree",
            "menu_to_create_folder": "Please use the menu to the right to create folders and add documents.",
            "select_document_or_folder": "Please select a document or a folder to delete",
            "select_folder_first": "Please select a folder before adding a document",
            "unable_to_load_folders": "Unable to load folders",
            "cannot_delete_populated_folder": "Cannot delete folder with existing documents"
        },
        "widgets": {
            "incident_severity": "Priority Count: Open (Closed)",
            "top_sources": "Top 5 Sources",
            "classifications": "Classifications",
            "most_recent_tickets": "Most Recent Tickets"
        },
        "pem": {
            "error": {
                "pem_connection_exception": "A list of devices could not be found, please try again or contact support for help [PEM server error]",
                "nonexistent_customer_exception": "There was a problem finding customer information, please contact support for help [PEM customer missing]"
            }
        },
        "response_plans": {
            "pdf": {
                "cover_page": {
                    "office_hours": "Company Office Hours: ",
                    "title": "Response Plans"
                },
                "non_technical_info": {
                    "admin_contact": "Administrative Contact:",
                    "billing_contact": "Billing Contact:",
                    "email": "Email:",
                    "header_title": "Non-Technical Info",
                    "mobile_phone": "Mobile Phone:",
                    "note": "Note:",
                    "office_phone": "Office Phone:",
                    "other": "Other:",
                    "pager": "Pager:"
                },
                "security_info": {
                    "additional_contact": "Additional Email Contacts",
                    "no_additional_contact": "No Additional Email Contacts Found",
                    "after_business": "After Business Hours",
                    "contact_name": "Contact Name:",
                    "contact_title": "Contact",
                    "during_business": "During Business Hours",
                    "email": "Email:",
                    "header_title": "Security Response Plan: Security Related Issues-Scans, Attempted Intrusion",
                    "primary_contact": "Primary Contact Name:",
                    "secondary_contact": "Secondary Contact Name:"
                },
                "technical_info": {
                    "after_business": "After Business Hours",
                    "during_business": "During Business Hours",
                    "header_title": "Technical Support: Line Support, Troubleshooting, Etc.",
                    "primary_contact": "Primary Contact Name:",
                    "secondary_contact": "Secondary Contact Name:"
                }
            }
        },
        "document_manager": {
            "counter_text": "%remaining% \/ %max% characters remaining.",
            "counter_text_error": "You have reached the maximum limit.",
            "edit": {
                "heading": "Edit a Document",
                "label": {
                    "description": "Description",
                    "emails": "Email Notifications",
                    "emails_placeholder": "Send email notification, use commas for multiple emails",
                    "field_is_required": "*Required",
                    "file_types": "Text, PDF, PNG, JPG, GIF, Excel, Word, and Powerpoint only",
                    "file_extension": "File Extension",
                    "group": "Folder",
                    "name": "Name",
                    "no_data": "No data available",
                    "submit": "Save",
                    "size": "Size",
                    "upload": "Select New File (5MB limit)",
                    "upload_date": "Uploaded"
                },
                "linktext": "Upload"
            },
            "error": {
                "alphanumeric_only": "File Name can only contain alphanumeric characters",
                "create_exception": "Failed to create document. Exception",
                "empty_customer_id": "An error occurred while uploading your file. Please confirm your file does not exceed the maximum size limit.",
                "file_too_large": "The selected file is too large, 5MB maximum",
                "invalid_filetype": "Invalid file type",
                "illegal_folder_name": "Folder Name can only contain alphanumeric characters",
                "title": "Error!",
                "unable_edit_doc": "Unable to edit document",
                "unable_save_new_doc": "Unable to save new document",
                "unable_save_to_repos": "Unable to save document to repository",
                "update_exception": "Failed to update document. Exception",
                "alphanumeric_and_max": "File Name can only contain alphanumeric & maximum of 100 characters",
                "description": "Description is required",
                "file_type_error": "File upload is required & only allowed Text, PDF, PNG, JPG, GIF, Excel, Word, and Powerpoint file format only"
            },
            "list": {
                "add_document": "Add Document",
                "add_folder": "Add Folder",
                "add_group": {
                    "body_label": "Folder Name",
                    "title": "Add New Folder"
                },
                "delete": "Delete",
                "delete_document": {
                    "button_confirm": "Yes, Delete Document",
                    "help_block": "Please confirm that you wish to delete this document",
                    "title": "Confirmation"
                },
                "delete_group": {
                    "button_confirm": "Yes, Delete Folder",
                    "help_block": "Please confirm that you wish to delete this folder",
                    "title": "Confirmation"
                },
                "heading": "Document Manager",
                "linktext": "List",
                "open_doc": "Open Document",
                "edit_doc": "Edit Document",
                "delete_doc": "Delete Document"
            },
            "restricted_access": "Permission denied: You don't have access to view the requested content.",
            "submit": {
                "heading": "Upload a Document",
                "label": {
                    "description": "Description",
                    "emails": "Email Notifications",
                    "emails_placeholder": "Send email notification, use commas for multiple emails",
                    "field_is_required": "*Required",
                    "file_types": "Text, PDF, PNG, JPG, GIF, Excel, Word, and Powerpoint only",
                    "group": "Folder",
                    "name": "Name",
                    "submit": "Save",
                    "upload": "Select File (5MB limit)",
                    "file": "File upload"
                },
                "linktext": "Upload",
                "success": "Your document was successfully uploaded."
            },
            "log": {
                "document_added": "Document Added: %title%",
                "document_edited": "Document Edited: %title%",
                "document_deleted": "Document Deleted: %filename%",
                "group_added": "Document Folder Added: %title%",
                "document_group_deleted": "Document Folder Deleted: %group%"
            },
            "exception": {
                "missing_customer_id": "An error occurred while uploading your file. Customer could not be identified.",
                "alphanumeric_only": "File Name can only contain alphanumeric characters and spaces",
                "file_type": "Invalid file type: ",
                "file_too_large": "The selected file is too large, 5MB maximum",
                "unable_to_save": "Unable to save new document",
                "unable_to_save_repo": "Unable to save document to repository",
                "create_failed": "Failed to create document. Exception: %exception%",
                "unable_to_edit": "Unable to edit document",
                "update_failed": "Failed to update document. Exception: %exception%",
                "unable_to_save_group": "Unable to save new document group",
                "create_group_failed": "Failed to create document group. Exception: %code%, %exception%",
                "unable_to_delete": "Unable to delete document",
                "delete_document_failed": "Failed to delete document. Exception: %code%, %exception%",
                "unable_to_delete_group": "Failed to delete document group",
                "unable_to_delete_nonempty_group": "Unable to delete folder that is not empty",
                "delete_document_group_failed": "Failed to delete document group",
                "unable_to_retrieve_document": "Unable to retrieve document details",
                "retrieve_document_failed": "Failed to retrieve document details. Exception: %code%, %exception%"
            },
            "help": {
                "tap_monthly_intro": "TAP (Targeted Attack Protection) is a product in BAE Systems\u2019 Email Protection Suite (EPS), which detects advanced threats through static and dynamic analysis of attachments, websites and downloads linked to inbound emails. The reports provide a summary of email detections through TAP for the given month. The reports cover the number of detections from TAP, a description of known threats that TAP has detected and flagged over the month, and an overview of some new phishing campaigns which have been used to test the detection capabilities of TAP against unknown threats.",
                "tap_monthly_instructions": "Below are the available reports. Click the title to download the PDF file.",
                "no_documents_available": "No documents are available at this time."
            }
        },
        "password_reset": {
            "text1": "We have received a password change request for your Email Security account, {{ email }}. If you made this request, then please click on the link below.",
            "text2": "This link will work until you reset your password.",
            "text3": "If you did not ask to change your password, then please ignore this email. Another user may have entered your username by mistake. No changes will be made to your account."
        },
        "user_notification": {
            "new_user_templace": {
                "text2": "Please click the following link to set your password.",
                "text2_alt": "You may use your primary email address and network password to login",
                "text3": "Thank you."
            },
            "page_load_prompt": {
                "button": {
                    "yes": "Yes",
                    "not_now": "Not now &mdash; ask me again later",
                    "never": "No &mdash; don&rsquo;t ask me again"
                }
            }
        },
        "dashboards": {
            "title": {
                "dashboard": "Device Dashboard"
            },
            "message": {
                "error_no_widgets": "You did not have the permission to any widgets. Please contact the administrator",
                "found": "Device Dashboard",
                "not_found": "No Device Dashboard Found"
            }
        },
        "ws": {
            "group_name": "Group Name",
            "site_name": "Site Name",
            "template_name": "Template Name",
            "ip_addr_range": "IP Address\/Range",
            "ip_description": "IP Description",
            "ou": "OU",
            "policy_template": "Policy Template",
            "access_control": "Access Control",
            "description": "Description",
            "user": "User",
            "member": "Member",
            "email": "Email",
            "url": {
                "cat_filtering": "Category Filtering",
                "dynamic": "Dynamic Content Rating",
                "override": "Website Override List",
                "iwf": "Block Illegal Content (IWF Sites)"
            },
            "timezone": "Timezone",
            "blockset": "Block set",
            "safe_search": "Safe Search",
            "uncat_websites": "Uncategorized Websites",
            "malware_protection": "Malware Protection",
            "malware": "Malware",
            "mal": {
                "antivirus_scanning": "Anti-Virus Scanning",
                "botnet_protection": "Botnet Protection"
            },
            "dlp": "DLP",
            "https_service": "HTTPS Service",
            "https_filtering": "HTTPS Filtering",
            "https": "HTTPS",
            "https_mode": {
                "off": "Off",
                "process_w_decryption": "Process with Decryption",
                "domain_based": "Domain Based",
                "block_all": "Block All"
            },
            "https_ops": {
                "cvc": "Block Invalid Certificates",
                "sod": "Service Override Database"
            },
            "logging": {
                "label": "Logging",
                "gel": "Granular Event Logging (GEL)",
                "inlcude_gel_in_log": "Include GEL in system event log",
                "dl": "Diagnostic Logging",
                "soc_delivery": "SOC Delivery",
                "soc_nt": "SOC Network Transactions"
            },
            "device_agents": "Device Agents",
            "countryname": "Country",
            "commonname": "Common Name",
            "state": "State",
            "stateorprovice": "State or Province",
            "locality": "Locality",
            "org": "Organization",
            "orgunit": "Organizational Unit",
            "active": "Active",
            "inactive": "Inactive",
            "download": "Download",
            "startdate": "Start Data",
            "enddate": "End Date",
            "status": "Status",
            "downloadhttpscert": "Download HTTPS Certificate"
        },
        "access_control": {
            "shadow_token": {
                "label": {
                    "require_checkbox": "Invited Access",
                    "delete": "Delete Access Code",
                    "generate": "Generate Access Code"
                },
                "expiration": "Access Code expires in",
                "generation": "Generate an access code to allow BAE Systems personnel to securely shadow your account. Access codes must be used within one hour of generation. Once the access code has been entered by the person shadowing your account, it remains active until the end of the shadowing session.",
                "itar_notice": "Invited access cannot be turned off. Please contact Customer Support",
                "support_contact": "Please call %phone% for support.",
                "help_text": "Enable this feature to prevent service provider admins from shadowing your account without permission. Please see <a href=\"%url%\" target=\"help_docs\">documentation<\/a> for additional details.",
                "archive_also": "You have Allow Archive Message Access enabled so this token will also allow admins to view archive message content. If you do not want to grant that access disable the feature under Account Options.",
                "help_not_required": "Access codes are not enabled for this account."
            },
            "archive_token": {
                "label": {
                    "allowed_checkbox": "Allow Archive Message Access",
                    "enter_access_code": "Access code",
                    "continue_without": "Continue without access code"
                },
                "generation": "Generate an access code to allow BAE Systems personnel to view Archive message content. Access codes must be used within one hour of generation. Once the access code has been entered by the person shadowing your account, it remains active until the end of the shadowing session.",
                "help_text": "When BAE Systems personnel shadow your account to provide customer support, they cannot see the content of archived messages. Enabling this feature will allow them to temporarily view the message content to assist with support cases.",
                "help_grant_access": "Support staff must have a token from you in order to view archive email content. You can create the token on the <a href=\"%url%\">Access Control<\/a> page.",
                "help": {
                    "tokens_enabled": "This customer has Allow Archive Message Access enabled. Enter the access code, which must come from the customer, to temporarily view their archive message content. The access code is valid for 1 hour after it is created, is valid for as long as you are shadowing the customer and can only be used once.",
                    "tokens_disabled": "This customer does not have Allow Archive Message Access enabled. They would need to enable it and create an access code in order to give you access to archive message content.",
                    "token_valid": "Your access code is valid. You will have access to view this customer's message content until you stop shadowing."
                },
                "logging": {
                    "enabled": "Allow Archive Message Access enabled",
                    "disabled": "Allow Archive Message Access disabled"
                },
                "error": {
                    "no_active_code": "There is no active access code. Please have the customer create a new code or proceed without access to message content.",
                    "expired": "The access code has expired. Please have the customer create a new code or proceed without access to message content.",
                    "invalid": "Invalid access code. Please check the code and enter it again or proceed without access to message content."
                }
            },
            "mobile_phone_prompt": {
                "message": "If you are unable to access your account, we can send you a text message instructing you how to reset your password. Would you like to register your mobile number?",
                "title": "Register Mobile Number"
            },
            "password_reset": {
                "label": {
                    "username": "Email Address",
                    "new_password": "New Password",
                    "retype_password": "Retype Password",
                    "submit": "Set Password"
                },
                "error": {
                    "invalid_email": "Invalid email. Please enter your email address again",
                    "password_mismatch": "The passwords you entered do not match. Please type your password twice in the fields below and submit the form again.",
                    "password_format": "The password you entered does not meet the following format requirements:",
                    "from_email_link": "Your password could not be set. Please enter your email address and password again, or contact your system administrator for help.",
                    "from_token_page": "Your password could not be set. Please contact your system administrator for help.",
                    "password_reuse": "Your new password may not match any of the last %limit% passwords.",
                    "not_allowed": "This user is not allowed to reset their password.",
                    "required": "Please enter value for this field"
                },
                "instructions": {
                    "enter_email": "Please enter your email address and you will receive instructions to reset your password.",
                    "enter_code": "A verification code has been sent to the mobile number saved in your profile. The code may take a few minutes to arrive. Do not click the Back button on your browser during that time. When the code arrives, please enter it below.",
                    "email": "A link with an embedded verification code has been emailed to the address you provided. Please follow the instructions contained in the email to reset your password.",
                    "enter_password": "Please enter and confirm your  new password below.",
                    "select_number": "Select number to receive verification code.",
                    "success": "Your password has been successfully reset. Click on the <b>Continue<\/b> button below to be redirected to your home page. <br><br> <b>Note: It may take 5-10 minutes before the new password takes effect.<\/b>"
                },
                "link": {
                    "return_to_login": "Return to the login screen.",
                    "reenter_email": "Didn&rsquo;t receive a verification code? <a href=\"%forgotPasswordUrl%\">Re-enter your email address<\/a>, and we&rsquo;ll send you another one."
                }
            },
            "web_proxy_password_reset": {
                "label": {
                    "username": "Email Address",
                    "new_password": "New Web Proxy Password",
                    "retype_password": "Retype Web Proxy Password",
                    "submit": "Set Web Proxy Password"
                },
                "error": {
                    "password_mismatch": "The passwords you entered do not match. Please type your password twice in the fields below and submit the form again.",
                    "password_format": "The password you entered does not meet the following format requirements:",
                    "from_email_link": "Your password could not be set. Please enter your email address and password again, or contact your system administrator for help.",
                    "from_token_page": "Your password could not be set. Please contact your system administrator for help.",
                    "password_reuse": "Your new password may not match any of the last %limit% passwords.",
                    "not_allowed": "This user is not allowed to reset their password."
                },
                "instructions": {
                    "enter_password": "Please enter and confirm your new web proxy password below.",
                    "success": "Your web proxy password has been successfully reset.",
                    "security": "Your web proxy password should be different than your network or email password for security purposes."
                },
                "link": {
                    "return_to_login": "Return to the login screen.",
                    "reenter_email": "Didn&rsquo;t receive a verification code? <a href=\"%forgotPasswordUrl%\">Re-enter your email address<\/a>, and we&rsquo;ll send you another one."
                }
            },
            "password_format": {
                "match": "Please enter the same password as above",
                "length": "It must be at least eight characters long.",
                "lower_case_letter": "Missing character case: lower-case letter.",
                "upper_case_letter": "Missing character case: upper-case letter.",
                "numeric_digit": "Missing character case: numeric digit.",
                "special_character": "Missing character case: special character.",
                "full": "Your new password must be at least eight characters long, and must include at least 3 out of 4 character cases: upper case letter, lower case letter, numeric digit and special character (# $ % &, etc)."
            },
            "two_factor_auth": {
                "instructions": {
                    "enter_code": "A verification code has been sent to the mobile number (%mobilenum%).  The code may take a few minutes to arrive.  Do not click the Back button on your browser or reload the page during that time.  When the code arrives, please enter it below.",
                    "resend_verification_code": "Resend a Verification Code to the Mobile number (%mobilenum%).",
                    "remember_device": "Remember this device?",
                    "resend_code": "Didn&rsquo;t receive a verification code?",
                    "send_code": "Identify verification.  Please provide a mobile number so we can send you a verification code."
                }
            },
            "saml_sso": {
                "instructions": {
                    "enter_email": "Please enter your email address.",
                    "login": "Single Sign On"
                },
                "different_user": "Login under a different account, or without Single Sign On",
                "error_text": "Single Sign On Error",
                "test_result_text": "Single Sign On Test Results",
                "test_result_success": "** SUCCESS **",
                "test_result_failure": "Test Failed",
                "test_result_details": "Test Details:"
            },
            "advance_password_notification_email": {
                "send_out": "Send out advance password expiry notification to %email%"
            },
            "customer_selection": {
                "instructions": "To continue, please select a Service Category"
            }
        },
        "support_ticket": {
            "list": {
                "heading": "Support Ticket",
                "linktext": "List"
            },
            "modal": {
                "heading": "Message",
                "linktext": "List"
            },
            "submit": {
                "heading": "Create a Support Ticket",
                "linktext": "Create",
                "requirements": {
                    "alternate_phone": "must contain only numbers, spaces, dots, hyphens and\/or parentheses"
                },
                "label": {
                    "alternate_email": "Alternate email: ",
                    "alternate_phone": "Alternate phone: ",
                    "company_name": "Company name: ",
                    "category": "Category",
                    "description": "Description",
                    "email_address": "Email address: ",
                    "first_name": "First name: ",
                    "issue": "Issue",
                    "last_name": "Last name: ",
                    "service": "Service",
                    "device": "Device",
                    "subject": "Subject",
                    "submit": "Submit ticket",
                    "type": "Type",
                    "upload": "Attach a file",
                    "submit_by_partner": "Ticket submitted on behalf of %customer_email% by %partner_email%",
                    "work_phone": "Work phone: "
                },
                "success": "Support Ticket #%ticket_number% was successfully submitted.",
                "failed": "Your ticket was not successfully submitted, please check your form and try again.",
                "title": {
                    "only_alphanumeric": "Only alphanumeric characters allowed",
                    "description": "Description required",
                    "field": "Field",
                    "only_valid_email": "Please enter valid email"
                }
            },
            "view": {
                "blank_comment": "You cannot submit a blank comment.",
                "comment_instructions": "Please enter a comment",
                "comment_success": "Your comment was successfully submitted.",
                "label": {
                    "analyst_commands": "Analyst commands",
                    "assignee": "Assigned to",
                    "attachments": "Attachments",
                    "approved": "Approved",
                    "approved_by": "Approved By",
                    "approved_on": "Approved On",
                    "category": "Category",
                    "comments": "Comments",
                    "date": "Submitted on",
                    "device_id": "Device ID",
                    "device_name": "Device Name",
                    "escalation": "Expedite",
                    "issue": "Issue",
                    "last_edited_on": "Last edited on",
                    "priority": "Priority",
                    "queue": "Queue",
                    "service": "Service",
                    "status": "Status",
                    "subject": "Subject",
                    "submit_comment": "Submit comment",
                    "submitter": "Submitted by",
                    "ticket_number": "Ticket #",
                    "title": "Title",
                    "type": "Type",
                    "upload": "Attach a file"
                },
                "linktext": "View",
                "no_analyst_commands": "There are no analyst commands.",
                "no_assignee": "unassigned",
                "comment_error": "Failed to add comment.",
                "no_comments": "There are not any comments yet.",
                "please_wait_while_we_reload": "Please wait while we reload "
            },
            "print_instructions": "If you encounter display issues during printing, please follow the instructions below.",
            "print_instructions_step1": "In the print dialog box, select Adobe PDF and then Preferences.",
            "print_instructions_step2": "In the Printing Preferences dialog box the tab should be Adobe PDF Settings",
            "print_instructions_step3": "Uncheck the box next to Rely on system fonts only; do not use document fonts",
            "print_instructions_step4": "Select OK and then click Print"
        },
        "policy": {
            "list_editor": {
                "button": {
                    "delete": "Delete",
                    "ok": "OK",
                    "new_term": "Add a new term",
                    "new_regex": "Add a new regular expression",
                    "find_term": "Search for a term",
                    "find_regex": "Search for a regular expression",
                    "submit_add": "Add",
                    "submit_search": "Search",
                    "show_all": "Show all",
                    "close": "Close",
                    "clear": "Clear"
                },
                "label": {
                    "add_term": "Term",
                    "add_regex": "Regular expression",
                    "add_weight": "Weight",
                    "add_notes": "Notes",
                    "find_term": "Term",
                    "find_regex": "Regular expression",
                    "add_url": "URL"
                },
                "table_heading": {
                    "term": "Term",
                    "regex": "Regular expression",
                    "weight": "Weight",
                    "action": "Action"
                },
                "error_info": {
                    "heading": "Error!",
                    "list_not_available": "List items not available"
                },
                "validation": {
                    "invalid_protocol": "Protocol must be either http:\/\/, https:\/\/ or blank",
                    "empty_domain": "The domain element of the url must not be blank",
                    "invalid_domain": "Incorrect domain. Should be e.g. domain.com or .domain.com",
                    "invalid_ip_address": "Please enter a valid IP address",
                    "invalid_path": "Incorrect path. Path should start with \/ and only include letters, numbers and characters \/ - . _ ~ ! $ & ' ( ) * + , ; = : @ %",
                    "no_weight": "A numerical weight value must be provided.",
                    "tags_present": "Notes must not contain HTML markup."
                },
                "message": {
                    "added_list_item": "Successfully added item(s).",
                    "added_list_item_publish": "Successfully added item(s). Please publish policy manually.",
                    "updated_list_item_publish": "Successfully updated item(s). Please publish policy manually.",
                    "deleted_list_item": "Successfully deleted list item(s).",
                    "updated_list_item": "Successfully updated item(s)."
                },
                "javascript": {
                    "adding_term": "Adding term...",
                    "adding_item": "Adding item...",
                    "updating_item": "Updating item...",
                    "adding_regex": "Adding regular expression...",
                    "deleting_term": "Deleting term...",
                    "deleting_item": "Deleting item...",
                    "deleting_regex": "Deleting regular expression...",
                    "deleting_selected_terms": "Deleting selected terms...",
                    "deleting_selected_items": "Deleting selected items...",
                    "deleting_selected_regexes": "Deleting selected regular expressions...",
                    "restoring term": "Restoring term...",
                    "restoring_item": "Restoring item...",
                    "restoring_regex": "Restoring regular expression...",
                    "successfully_added": "Successfully added:",
                    "successfully_deleted": "Successfully deleted:",
                    "successfully_restored": "Successfully restored:",
                    "successfully_updated": "Successfully updated:",
                    "list_item_publish": "Please publish policy manually.",
                    "retrieving_search_results": "Retrieving search results...",
                    "delete_item": "Are you sure you want to delete %item%?",
                    "delete_items": "Are you sure you want to delete the selected items?",
                    "loading_data": "Loading data...",
                    "data_table": {
                        "info": "%start%&ndash;%end% of %total%",
                        "info_empty": "0 of 0",
                        "length_menu": "Show %menu%",
                        "empty_table": "There are no items in this list",
                        "paginate": {
                            "first": "First",
                            "last": "Last",
                            "next": "Next",
                            "previous": "Previous"
                        }
                    }
                }
            },
            "lists": {
                "javascript": {
                    "duplicate_name": "The list name: %listName% already exists. Please enter a different name.",
                    "adding_new": "Adding new list...",
                    "saving_list": "Saving list...",
                    "saved_list": "Successfully updated list",
                    "delete_name": "Are you sure you want to delete %name%?",
                    "delete_list": "Deleting list: %name%",
                    "revert_list": "Are you sure you want to revert all changes to this managed list?",
                    "reverting_list": "Reverting managed list overrides...",
                    "reverted_list": "Successfully reverted list changes.",
                    "publishing_managed": "Publishing managed lists...",
                    "name_missing": "List name is required.",
                    "name_error": "List name can only contain letters or numbers.",
                    "description_error": "List description can only contain letters, numbers or punctuation."
                }
            },
            "message": {
                "getting_policy": "Getting policy...",
                "saving_policy": "Saving policy..."
            },
            "heading": {
                "discard_threshold": "Discard Threshold",
                "ts_actions": "Inbound Trust Level Actions",
                "reply_forward_actions": "Reply and Forward Actions",
                "marking_level": "Trust Level Message Banners",
                "sep_threat_policy": "SEP Threat Policy",
                "tap_threat_policy": "TAP Threat Policy"
            },
            "label": {
                "enable_ts_discard_threshold": "Enable trust score discard threshold",
                "discard_below": "Discard messages with a trust score below",
                "enable_ts_actions": "Enable trust score actions",
                "enable_outbound_ts_actions": "Enable outbound trust score actions",
                "enable_message_marking": "Enable message marking",
                "mark_message": "Add banner to %color% messages",
                "mark_include_reasons": "Include the reasons for score in the banner"
            },
            "action": {
                "no_action": "No Action",
                "monitor": "Monitor",
                "user_quarantine": "User Quarantine",
                "admin_quarantine": "Admin Quarantine",
                "manager_quarantine": "Manager Quarantine",
                "discard": "Discard",
                "discard_notify_sender": "Discard and notify sender",
                "admin_quarantine_notify_sender": "Admin Quarantine and notify sender",
                "strip_attachments": "Strip Attachments",
                "tag_subject": "Tag Subject",
                "add_banner": "Add Banner",
                "with_red_score": "messages with a Red trust score.",
                "with_red_original_score": "messages with a Red original trust score.",
                "with_amber_score": "messages with an Amber trust score.",
                "with_amber_original_score": "messages with an Amber original trust score.",
                "with_green_score": "messages with a Green trust score.",
                "with_green_original_score": "messages with a Green original trust score.",
                "add_banner_green": "Add banner to Green messages.",
                "add_banner_red": "Add banner to Red messages.",
                "add_banner_amber": "Add banner to Amber messsages.",
                "never": "Never",
                "extremely": "5 (extremely likely spam)",
                "very_likely": "4 (very likely spam)",
                "likely": "3 (likely spam)",
                "questionable": "2 (questionable spam)",
                "unlikely": "1 (unlikely spam)",
                "encrypt": "Encrypt",
                "send_securely": "Send Securely"
            },
            "help": {
                "discard_threshold": "The discard threshold allows you to delete messages with a trust score below the threshold. This allows you to quarantine most messages with low scores but delete others with a very low score.",
                "ts_actions": "Select the action to take for inbound messages at each level.",
                "ts_override": "The discard threshold will override these actions.",
                "ts_monitor": "Monitor will add a logging tag that can be viewed in Reports under Social Engineering Protection Overview.",
                "ts_outbound_action": "You may take actions on outbound messages that are replies or forwards of messages with red or amber trust scores.",
                "marking_level": "Select which trust levels should be marked with the trust score banner in messages.",
                "mark_include_reasons": "The reasons a message received a trust score can be included in the trust score banner.",
                "kyog_move_actions": "The Quarantine and Discard (TAP only) actions must be the last action on a level because no more processing can be done on the message after it is moved.",
                "view_action_descriptions": "View action descriptions",
                "policy_overview_ecf": "The policy overview lists the actions that are enabled for each phase of your policy. See the individual policy pages to make changes.",
                "policy_overview_dlp": "The policy overview lists the rules for each phase of your policy. See the policy editor to make changes. Note that the overview may include unpublished changes, marked with",
                "delete_children": "The rule '%rule_name%' has child rules. Would you like to keep the child rules and only delete the parent, or delete the rule and all children?"
            }
        },
        "gws_setup": {
            "inbound_routing": {
                "heading": "Inbound Mail Routing",
                "subheading": "Where should we deliver your inbound email?",
                "domains": "Deliver to this server for the following domains:"
            },
            "outbound_routing": {
                "heading": "Outbound Mail Routing",
                "subheading": "Where are you going to send your email from?",
                "existing": {
                    "heading": "Existing IP addresses"
                },
                "new": {
                    "heading": "Add a new IP address",
                    "label": {
                        "ip_address": "IP address",
                        "device_type": "Device type",
                        "mail_server": "Mail server",
                        "no_auth": "Device that cannot authenticate (e.g., fax\/copier)",
                        "per_week": "How many emails per week, estimated?",
                        "email_type": "Type of email sent through this device",
                        "recipients": "Recipients of relayed emails",
                        "internal": "Internal",
                        "external": "External",
                        "add_button": "Add IP Address"
                    }
                }
            },
            "domain": {
                "heading": "Recipient Domains",
                "subheading": "What domains do you receive mail for?"
            },
            "global_ip": {
                "heading": "Global IP Blocks",
                "subheading": "Discard email from global IP blocks without notification."
            },
            "catch_all": {
                "heading": "Catch-All Mailbox",
                "subheading": "Default mailbox to catch email for email addresses that do not exist."
            },
            "ee_lockout": {
                "heading": "Password Lockout",
                "subheading": "Configure your Email Encryption password lockout settings.",
                "lockout_attempts": "Lockout users after %attempts% failed login attempts",
                "lockout_duration": "Lockout users for %duration%",
                "logging": {
                    "settings": "EE password lockout settings updated",
                    "updated": "EE password lockout %setting% set to %value%. "
                },
                "update_error": "Unable to update Email Encryption password lockout settings."
            },
            "label": {
                "hostname": "Hostname",
                "ip_address": "IP Address",
                "priority": "Priority",
                "domains": "Domains",
                "notes": "Notes",
                "status": "Status",
                "action": "Action",
                "domain_name": "Domain Name",
                "type": "Type",
                "add_catch_all": "Add Catch-All Mailbox",
                "use_all_domains": "Use this catch-all mailbox for all domains",
                "saving": "Saving...",
                "delete_catchall_success": "Successfully deleted catch-all mailbox"
            },
            "error": {
                "enter_select_valid_user": "Please select or enter a valid user.",
                "select_one_domain": "You must select at least one domain."
            },
            "help": {
                "priority": "When multiple IP addresses are defined for your mail, the priority setting determines the precedence. Lower values have a higher precedence, meaning they are attempted first."
            }
        },
        "templates": {
            "message": {
                "publishing_managed_templates": "Publishing managed templates...",
                "create_success": "Successfully created template",
                "save_success": "Successfully saved template",
                "deleting_template_name": "Deleting template %name%...",
                "switching_to_text": "Switching to the text editor will remove all HTML formatting and any links will have to be inserted again. Do you wish to continue?"
            },
            "label": {
                "new_template": "New template",
                "html_editor": "HTML Editor",
                "text_editor": "Text Editor"
            },
            "error": {
                "name_required": "Template name is required.",
                "name_alpha_numeric": "Template name can only contain letters or numbers.",
                "name_unique": "Template name must be unique.",
                "from_valid_email": "From line must be a valid email address.",
                "subject_required": "Subject is required.",
                "subject_alpha_numeric": "Subject can only contain letters, numbers or punctuation.",
                "content_required": "Template content is required.",
                "invalid_content": "Invalid template content."
            }
        },
        "soc_eng": {
            "trust_levels": {
                "trust_score_levels": "Trust Score Ranges",
                "level_descriptions": "Message Banner Descriptions",
                "message_marking": "Trust Score Message Marking",
                "quarantine_release": "Quarantine Release",
                "color_green": "Green",
                "color_amber": "Amber",
                "color_red": "Red",
                "control_method": "Method",
                "quarantine_remove": "Remove trust score banner",
                "button_defaults": "Reset to defaults",
                "level_text": "Assign the trust score range for each marking level. Scores that fall within these ranges will be assigned to the corresponding color.",
                "description_text": "If you choose to append message banners, these descriptions will appear on inbound messages originating from outside your company. You may customize the text. HTML markup is not permitted.",
                "marking_method_text": "Select the method to mark the trust score in messages. The email client used in your company should determine the method.",
                "quarantine_remove_text": "You may choose to have trust level marking information removed from messages when they are released from the quarantine.",
                "plugin_label": "Plugin: Outlook, OWA and Outlook Mobile plugin.",
                "body_label": "Modify body of message by adding an indicator to the top of the message.",
                "subject_label": "Modify the message subject line.",
                "icon_defaults": "Reset to default",
                "icon_edit": "Edit",
                "icon_save": "Save",
                "icon_cancel": "Cancel",
                "icon_preview": "Preview trust banner",
                "yes": "Yes",
                "no": "No"
            },
            "messages": {
                "update_levels": "Updating trust levels",
                "reset_levels_defaults": "Resetting trust levels to defaults",
                "no_marking": "No message marking method in request",
                "saving_marking": "Saving marking method",
                "save_quarantine_release": "Saving quarantine release setting",
                "save_success": "Saved successfully",
                "description_default": "Resetting message banner to default",
                "no_description": "Please enter text for the message banner",
                "save_description": "Saving banner description",
                "description_limit": "The description must be 120 characters or less",
                "remove_quarantine_released": "Remove trust score banner when messages are released from quarantine",
                "deleting": "Deleting",
                "no_selected": "No items were selected. Please select items.",
                "delete_selected": "Delete the selected items?",
                "deleting_selected": "Deleting selected items",
                "selected_nochange": "There are no items to change.",
                "select_mark": "Please select items to mark.",
                "select_unmark": "Please select items to suppress trust score.",
                "mark_selected": "Mark the selected items?",
                "unmark_selected": "Suppress trust score marking on the selected items?",
                "selected_not_handled": "Selected option not handled",
                "edit": "Edit Domain",
                "add": "Add Domain",
                "view": "View Domain",
                "invalid_domain": "The domain specified is invalid",
                "saving_domain": "Saving Internal Domain",
                "update_success": "Successfully updated domains",
                "invalid_ip": "Please enter a valid IP address",
                "existing_ip": "IP address is already in list",
                "invalid_ips": "The following IP addresses are not valid",
                "delete_domain": "Delete",
                "deleting_domain": "Deleting item",
                "deleting_unable": "Unable to delete domain",
                "delete_success": "Successfully deleted items",
                "remove_marking": "Suppress trust score marking if authenticated.",
                "include_marking": "Include trust score marking for policy.",
                "in_list": "The following items are already in the list",
                "already_list": "is already in the list.",
                "menu_add": "Add domain",
                "menu_delete": "Delete selected items",
                "menu_mark": "Suppress selected items",
                "menu_unmark": "Mark selected items",
                "trust_band_success": "Social Engineering trust bands updated.",
                "domain_success": "Internal domains updated.",
                "domain_delete_success": "Internal domains deleted.",
                "domain_marking_success": "Internal domain marking updated.",
                "confirm_save_vips": "Do you want to save changes to the VIP list? Click cancel to discard changes.",
                "no_changes_to_save": "No changes to save."
            },
            "errors": {
                "config_error": "Error getting Social Engineering configuration",
                "trust_band_error": "There was an error updating Social Engineering trust bands.",
                "field_name_error": "Field name is missing from post.",
                "value_error": "Value is missing from post.",
                "html_error": "The value contains invalid html content.",
                "field_error": "There was an error updating the Social Engineering field.",
                "domain_error": "Failed to get Internal Domain List.",
                "no_domain": "You must include a domain.",
                "failed_add_ip": "Failed to add internal domain IPs.",
                "failed_add_domain": "Failed to add internal domain.",
                "se_sampling_error": "Error updating message sampling."
            },
            "help": {
                "priming1": "During the initial priming period, Social Engineering Protection (SEP) will automatically analyze your email to determine standard patterns so that later it will be able to identify anomalies. This process takes about a day for existing Email Protection Suite (EPS) customers, and up to a week for new customers, depending on the amount of mail flow.",
                "priming2": "During this time, you should manually assign your VIP users and configure your whitelist and internal domains. This will help improve the accuracy of the trust scores and reduce false positives.",
                "priming3": "The Setup Assistant will guide you through the configuration of SEP. You do not need to complete the configuration in one session, and may come back to this Setup Assistant at any time.",
                "learning1": "Once Priming has completed, SEP will automatically start to apply trust scores to messages. The system is now in the \"Learning Period\".",
                "learning2": "These scores will not be visible to your End Users, but you can view the distribution of the scores in the",
                "learning22": ". You should monitor the scores on that report throughout the learning period until you are satisfied that the trust scores are accurate.",
                "learning3": "You will see a natural reduction of false positives over the first few weeks, as the system learns normal email patterns for your users. However, you should also be looking to identify whether there are any common trends that are causing false positives. False positives are emails that are scored red or amber when, in fact, they are trustworthy. Common causes of false positives are detailed in the EPS Admin Guide. You often resolve them by configuring your internal domains, whitelist entries, or VIPs correctly. You may return to the Setup Assistant to do this.",
                "learning4": "You choose when to end the Learning Period, and you do so by simply configuring your policy to enter the Active Period as described below. We recommend that you make that transition around 4-5 weeks after the Learning Period begins, after which time you should be sure that the majority of your emails are being scored correctly. By this time, you should be seeing that less than 0.5% of all of your incoming mails are scored \"red\", and less than 3% of all incoming mails are scored \"amber\".",
                "active1": "When you are happy that your messages are being scored correctly, you may add trust banners to messages and perform other actions, such as quarantining red messages, through the policy. The action of configuring your policy in this way ends the Learning Period and takes you in to the Active Period.",
                "active2": "The policy assistant will be enabled once priming is complete."
            },
            "label": {
                "priming": "Priming and Setup",
                "learning": "Learning Period",
                "active": "Active Period",
                "sep_overview_report": "SEP Overview report"
            },
            "internal_domains": {
                "domain_header": "Internal Domains",
                "domain_table_header": "Domain",
                "ip_table_header": "IP Addresses",
                "suppress_table_header": "Suppress",
                "delete_table_header": "Delete",
                "actions_button": "Actions",
                "add_domain": "Add Domain",
                "info_1": "List the domains that send email on your organization's behalf including primary\/alternate domains and third party domains which are considered internal but whose Mail Exchanger (MX) Record does not point to our email gateway.",
                "info_2": "This list has two purposes",
                "info_3": "Messages received from the domains on the list will be checked for look-alike domains.",
                "info_5": "To specify whether or not to suppress the trust score on authenticated messages from those domains. If not selected the message will be subject to the Social Engineering Protection policy. If a domain does not support authentication you may add the associated IP addresses for authentication.",
                "info_6": "A look-alike domain is a false version of the domain which is visually similar to the real one. Letters may be switched or replaced by homoglyphs e.g. a capital i for a lower case l or a different top level domain used.",
                "info_7": "The domain format should be",
                "info_8": "matches all emails in the specified domain",
                "info_9": "IP addresses or subnets with mask values from 8 to 31 are supported. Addresses will be normalized to remove leading zeros.",
                "info_10": "Internal domains will automatically be added to the whitelist for Social Engineering Protection.",
                "suppress_messages": "Suppress Trust Score Banner",
                "add_scores": "Suppress trust score banner on authenticated messages from this domain",
                "suppress_title": "Suppress trust score banner on messages from this domain",
                "whitelisted_title": "Item is whitelisted",
                "spf_title": "Indicator for whether there is an SPF record for the domain",
                "dmarc_title": "Indicator for whether there is a DMARC record for the domain"
            }
        },
        "whitelist_upload": {
            "header": "Upload Email\/Domain Whitelist",
            "main_info": "Upload a file that contains email addresses or domains to whitelist.",
            "invalid_header": "The file has an invalid header",
            "no_domain": "You must include the domain\/email header and data in the upload",
            "invalid_domain": "Invalid domain\/email in row",
            "invalid_ip": "Invalid IP address in row",
            "invalid_entry": "Invalid data for %column% in row",
            "ip_subdomain": "Attempting to add IP address to subdomain in row",
            "new_no_service": "For a new domain in an upload including IP addresses, you must specify at least one service - row",
            "new_no_active": "For a new domain, you must have at least one active service. No services are active in row",
            "no_service": "You must have at least one active service. No services are active in row",
            "loading_whitelist": "Loading Whitelist...",
            "choose_uploads": "Please choose a file to upload",
            "choose_cvs": "The file must be of type .cvs or .txt",
            "help_1": "The file must have a header row. Headers are \"domain\", \"spam\", \"tap\" , \"se\" and \"ip\" (Depending on your email security configuration). Domain is always required.",
            "help_2": "Values for spam and tap services  are N (Off), Y (On) and A (On with authorization). For se service, values are N or A. At least one service must be active (Y or A).",
            "help_3": "For backwards compatibility a file can include only domain data. In this case spam will be automatically set to On. Otherwise service values must be specified for any new domains.",
            "help_4": "IP addresses cannot be added to subdomains and are only used if authorization is configured in at least one service phase. Multiple addresses should be separated with a pipe symbol (|).",
            "help_5": "Note: Only .txt and .csv files are supported.",
            "problem_uploading": "There was a problem uploading the whitelist.",
            "unable_add": "Unable to add IP addresses.",
            "successful_upload": "Whitelist successfully uploaded.",
            "unable_file": "Unable to open file.",
            "template_blank": "Blank template",
            "template_existing": "Existing whitelist",
            "template_error": "Unable to download existing whitelist for template."
        },
        "whitelist": {
            "dialog_title": "Add Whitelist Entry",
            "label": {
                "whitelist": "Whitelist",
                "whitelist_domain": "Whitelist domain for Social Engineering Protection",
                "email_whitelist": "Email Whitelist",
                "email_blacklist": "Email Blacklist",
                "ip_whitelist": "IP Whitelist",
                "ip_blacklist": "IP Blacklist",
                "email_domain": "Email \/ Domain",
                "ip_address": "IP Address",
                "ip_addresses": "IP Addresses",
                "services": "Services",
                "require_auth": "require authentication",
                "add_ip": "Add IP address or range",
                "add_multiple": "Add multiple",
                "items_selected": "items selected. The selected services will be applied to all seleted items.",
                "add_email": "Add email address",
                "add_domain": "Add domain",
                "senders_email": "Sender's email",
                "senders_domain": "Sender's domain",
                "include_ip": "Include IP address",
                "add_to_whitelist": "Add to whitelist",
                "add_to_blacklist": "Add to blacklist",
                "w_sender": "Whitelist sender",
                "w_domain": "Whitelist sender's domain",
                "b_sender": "Blacklist sender",
                "b_domain": "Blacklist sender's domain",
                "spam": "Spam",
                "tap": "TAP",
                "sep": "SEP",
                "wl": "WL",
                "delete": "Delete",
                "spf": "SPF",
                "dkim": "DKIM",
                "dmarc": "DMARC",
                "upload_email_blacklist": "Upload Email Blacklist",
                "whitelist_for_end_users": "Email Whitelist For End Users",
                "blacklist_for_end_users": "Email Blacklist For End Users",
                "add_white_to_multiple_end": "Add whitelist items to multiple users.",
                "add_black_to_multiple_end": "Add blacklist items to multiple users.",
                "address_to_whitelist": "Addresses to whitelist",
                "address_to_blacklist": "Addresses to blacklist",
                "user_list_file": "User list file",
                "upload": "Upload",
                "whitelist_for": "Whitelist for",
                "sender_auth_support": "Sender Authentication Support",
                "check_spf_dmarc": "Check SPF and DMARC support",
                "domain_supports": "This domain supports %method%",
                "domain_not_supports": "This domain does not support %method%",
                "export_button": "Export"
            },
            "help": {
                "email_accept": "Email addresses to always accept mail from",
                "email_reject": "Email addresses to always reject mail from",
                "ip_accept": "IP addresses to always accept mail from",
                "ip_reject": "IP addresses to always reject mail from",
                "add_domain": "Enter an email address or domain. You may also add multiple items and apply the same services.",
                "enter_valid_ip": "IP addresses will be used if the domain requires authentication and does not support DMARC, DKIM or SPF. IPs cannot be added to subdomain entries or when adding multiple entries.",
                "email_mail_from": "Mail from entries in this list will always be %accept%, irrespective of filter policy",
                "ip_mail_from": "Mail from IP addresses in this list will always be %accept%, irrespective of filter policy",
                "ip_requirements": "IP addresses must meet the following requirements:",
                "ip_req_ipv4": "IPv4 IP addresses must be specified in the format nnn.nnn.nnn.nnn where nnn is a number from 0 to 255,",
                "ip_req_cidr": "CIDR IP addresses must be specified in the format n1.n2.n3.n4\/n5 where n1-n4 must be between 0 and 255 and the optional n5 must be between 8 and 31.",
                "ip_limit": "You can specify a maximum of 2000 IP addresses.",
                "irrespective": "irrespective of filter policy",
                "unless_in_blacklist": "unless the address\/domain is also found in the Black List.",
                "following_formats_accepted": "The following formats are accepted:",
                "matches_email": "matches the exact email address",
                "matches_all_in_domain": "matches all emails in the specified domain",
                "matches_all_in_subdomain": "matches all emails in subdomains",
                "matches_all_tld": "matches all emails with the top level domain",
                "ips_with_domain": "Note that IP addresses are associated with the domain and any email addresses with the same domain will share those IP addresses.",
                "address_in_both": "NOTE: If an address\/domain exists in both White and Black lists the inbound mail will always be rejected.",
                "upload_to_blacklist": "Upload a file that contains email addresses to blacklist.",
                "download_example": "Download an example file",
                "enter_emails_to_whitelist": "Enter email addresses or domains to whitelist. Separate multiple entries with commas. Upload file with user email addresses.",
                "enter_emails_to_blacklist": "Enter email addresses or domains to blacklist. Separate multiple entries with commas. Upload file with user email addresses.",
                "only_txt_csv": "Note: Only .txt and .csv files are supported.",
                "upload_ip_white": "Upload a file that contains IP addresses to whitelist.",
                "upload_ip_black": "Upload a file that contains IP addresses to blacklist.",
                "separate_line": "Put each address on a separate line",
                "send_this_file": "Send this file",
                "entry_override": "Note: If the entry is already in the whitelist the services selected here will override those settings.",
                "auth_selected": "If authentication is required the sender's domain must support DMARC, DKIM or SPF, or you may include their IP address, for the sender to be whitelisted.",
                "required_field": "* Required field",
                "ip_included": "IP address should be included if authentication is required and the sender's domain does not support DMARC, DKIM or SPF.",
                "auth_support": "The presence of SPF or DMARC records for a domain indicates that the domain supports authentication.  Some domains may also support authentication via DKIM.  If a sending domain does not appear to support authentication, you can still require authentication by providing a list of IP addresses that are normally used to send mail from the domain."
            },
            "error": {
                "domain_missing": "Domain not in request",
                "entries_missing": "Entries not in request",
                "services_missing": "Services not in request",
                "data_missing": "Data not in request",
                "get_whitelist_for": "Error getting whitelist for",
                "update_whitelist": "Error updating whitelist entry",
                "add_ip_address": "Error adding IP address",
                "delete_domain_ip": "Error deleting domain from Domain IP List",
                "delete_ip": "Error deleting IP addresses",
                "delete_whitelist": "Error deleting whitelist entry",
                "unable_add_whitelist": "Unable to add whitelist entry.",
                "unable_add_blacklist": "Unable to add blacklist entry.",
                "bad_email_format": "The sender address is not a valid format."
            }
        },
        "tap": {
            "heading": {
                "clicktime_whitelist": "ClickTime URL Whitelist",
                "edit_clicktime_list": "Edit ClickTime URL Whitelist...",
                "view_clicktime_list": "View ClickTime URL Whitelist...",
                "splash_styling": "Splash Page Styling"
            },
            "label": {
                "malicious": "Malicious",
                "suspect": "Suspect",
                "no_threat": "No Threat"
            },
            "help": {
                "url_whitelist1": "You can configure trusted URLs which will not be subject to ClickTime analysis.",
                "url_whitelist2": "URLs can include the protocol (http(s):\/\/), domain (domain.com) or domain and subdomains (.domain.com) and the path (\/path\/example)."
            }
        },
        "kyog": {
            "label": {
                "es_setup_tasks": "Email Security Setup Tasks",
                "connect_to_o365_account": "Connect to your Office 365 account",
                "connect_to_office365": "Connect to Office 365",
                "initial_user_sync": "Initial user sync",
                "confirm_sep_info": "Confirm Social Engineering Protection info",
                "enable_sep_sampling": "Enable Social Engineering Protection sampling",
                "configure_es_policy": "Configure your Email Security Policy",
                "setup_assistant": "Setup Assistant",
                "view_policy": "View Policy",
                "setup_complete": "Setup Complete",
                "remove_setup": "Remove setup tasks",
                "connection_status": "Connection Status",
                "o365_status": "Office 365 Connection",
                "sync_status": "Initial sync status",
                "last_sync": "Last user sync",
                "pause_processing": "Pause Email Security Processing",
                "pause_label": "Pause processing",
                "restart_processing": "Restart Email Security Processing",
                "restart_label": "Restart processing",
                "button_pause": "Pause Email Processing",
                "remove_connection": "Remove O365 Connection",
                "quarantined_messages": "Quarantined messages",
                "service_status": "Service Status"
            },
            "message": {
                "connection_setup": "Connected",
                "connection_success": "Your connection with Office 365 has been set up.  Synchronization of users has begun.",
                "sync_pending": "Pending connection",
                "sync_in_progress": "In Progress",
                "sync_complete": "Complete",
                "not_synced": "Not synchronised",
                "not_connected": "Not connected",
                "connection_paused": "Email Security processing paused",
                "connection_pausing": "Pausing Email Security processing",
                "connection_restarted": "Email Security processing restarted. It will take a short time to be fully active.",
                "connection_restarting": "Restarting Email Security processing"
            },
            "error": {
                "must_choose_option": "You must choose at least one service option. TAP and\/or SEP.",
                "must_provide_domain": "The primary domain must be provided.",
                "gmail_unsupported": "Gmail service is not yet supported.",
                "connection_setup_failure": "An error has occurred setting up the connection to Office 365.",
                "connection_permissions_failure": "It was not possible to acquire the permissions required for connection to Office 365.",
                "connection_process_failure": "An error occurred while setting up the Office 365 connection. Please contact support.",
                "connection_not_made": "The o365 connection has not been activated yet and so Email Security processing cannot be paused.",
                "connection_pause_already": "Email Security processing has is already paused.",
                "connection_pause_failure": "An error has occurred while attempting to pause Email Security processing. Please contact support.",
                "connection_pause_success": "Email Security processing has been paused successfully.",
                "connection_restart_not_paused": "Email Security processing is currently active and does not need to be restarted.",
                "connection_restart_failure": "An error has occurred while attempting to restart Email Security processing. Please contact support.",
                "connection_restart_success": "Email Security processing has been restarted successfully."
            },
            "info": {
                "connect": "You will be asked to log in to your Office 365 account and agree the permissions required by the Email Security service.",
                "sync_auto": "The sync will begin automatically once the connection to Office 365 is established.",
                "sep_setup": "Once the initial user sync is complete, you will be able to verify VIP users and Internal Domains. You can add email addresses and domains to the %whitelist% at any time.",
                "whitelist": "Whitelist",
                "policy_setup": "Once the service begins inspecting your emails, the initial policy will log any threats and the results can be viewed in Reports. Once you are comfortable that your emails are being scored correctly, you can update your policy to handle threats appropriately.",
                "setup_complete": "When your setup is complete you can remove the setup tasks from the dashboard.",
                "pause_info_1": "You can temporarily pause email security. This will stop processing of your emails completely and also stop user synchronization.",
                "pause_info_2": "Access permissions required by the service will be retained so you can then restart the service when required.",
                "pause_info_3": "Any emails received while processing is paused will not be processed when the service is restarted.",
                "restart_info": "You can restart email security. This will start user synchronization and processing of emails using your existing access permissions.",
                "restart_info_2": "Emails received while processing was paused will not be processed when the service is restarted.",
                "pause_confirm": "Are you sure you want to pause email security processing and user synchronization?",
                "remove_info1": "If you want to completely stop email security processing, you can remove the Enhanced Security application from your O365 account. You should only do this if you wish to stop using Email Security protection permanently. It would be advisable to have alternative email security protection in place before doing this.",
                "remove_info2": "Before removing the application you should pause Email Security processing using the controls above. This will prevent any issues when the application is removed.",
                "remove_info3": "In order to remove the application you need to login in to your Azure Active Directory account as an administrator. A free Azure subscription  is provided with any paid O365 subscription.",
                "remove_info4": "Once logged in to Azure, click on the Azure Active Directory link and then the Enterprise applications link.",
                "remove_info5": "Find the Enhanced Security application icon and click on that.",
                "remove_info6": "Click on the Delete option. The application will be removed along with the granted permissions for Email Security to access your email accounts. It may take some minutes before all enhanced email security processing stops."
            }
        },
        "service": {
            "anti_spam": "Anti-Spam",
            "tap": "TAP",
            "soc_eng": "Social Eng."
        },
        "quar": {
            "error": {
                "sender_whitelist": "Failed to add sender to whitelist",
                "but_whitelist": "but failed to add sender to whitelist.",
                "but_policy": "but not able to add new domain and IP to the policy.",
                "whitelist_ips": "Failed to add whitelist IP.",
                "ip_publish": "Failed to publish policy with new domain\/IP",
                "release": "Failed to release message.",
                "add_sender": "Failed to add %sender% to %list%.",
                "ip_added_publish_fail": "Successfully added %sender% to whitelist but the new IP was not published.",
                "invalid_request": "Invalid request",
                "invalid_msg_list_data": "Invalid message list data: error %key%",
                "invalid_msg_list_db_key": "Invalid message list database key: %key%",
                "invalid_request_data": "Invalid request data %data%",
                "unsupported_request": "Unsupported Request",
                "message_not_found": "Message not found",
                "request_data_mismatch": "Request data mismatch",
                "failed_perform_required_action": "Failed to perform requested action",
                "error_in_request_handle_msg": "Error in request to handle quarantine message: %error%",
                "unsubscribe": "Error in request to handle unsubscribe action: %error%",
                "saving_opt_out": "Error saving option-out",
                "requested_action_not_taken": "The requested action could not be taken",
                "folders_not_found": "Unable to retrieve folders for central quarantine",
                "customers_not_found": "Unable to retrieve customers for central quarantine"
            },
            "warning": {
                "msg_already_released_add_list": "The message is no longer in the quarantine and may have already been released or deleted. You must log in to add the sender or their domain to the %list%.",
                "msg_already_released": "This message may have already been deleted or released from the quarantine."
            },
            "message": {
                "domain_ip_updated": "Domain IP list updated.",
                "domain_ip_updated_quar_note": "Domain IP list updated from quarantine notification.",
                "release_success": "Successfully released message",
                "release_whitelist_success": "Successfully released messages and added sender to whitelist.",
                "added_sender": "Successfully added %sender% to %list%.",
                "quar_notification_message": "Quarantine notification message",
                "confirm_text": "Do you really want to %action% the selected messages from the quarantine?",
                "violation_of_policy": "This message contains a violation of your email policy.",
                "processing_request": "Processing request...",
                "request_processed": "Request processed",
                "manage_quar_here": "manage your current quarantine contents here",
                "some_released": "Some messages may have not been processed because they have already been deleted or released from the quarantine.",
                "msg_released": "This message may have already been deleted or released from the quarantine.",
                "you_can": "You can",
                "messages_released": "messages released",
                "messages_deleted": "messages deleted",
                "of": "of",
                "enter_justification": "Please enter a justification.",
                "move_success": "Successfully moved message(s)",
                "hold_success": "Successfully applied hold to message(s)",
                "unhold_success": "Successfully removed hold from message(s)",
                "annotate_success": "Successfully annotated message(s)",
                "delete_success": "Successfully deleted message(s)",
                "forward_success": "Successfully forwarded message(s)",
                "default_success": "Successfully performed action"
            },
            "label": {
                "whitelist": "whitelist",
                "blacklist": "blacklist",
                "confirm_action": "Confirm Action",
                "action_failed": "Action Failed",
                "close_window": "Close window",
                "to": "To",
                "from": "From",
                "subject": "Subject",
                "date": "Date",
                "size": "Size",
                "release": "Release",
                "released": "released",
                "message_released": "Message Released",
                "message_deleted": "Message Deleted",
                "message_not_found": "Message Not Found",
                "w_sender_or_domain": "Whitelist Sender or Domain",
                "services": "Services",
                "select_folder": "Select folder",
                "select_create": "Select or create folder",
                "create_folder": "Create New Folder...",
                "no_folder": "No folders available",
                "customers": "Customers",
                "folders": "Folders"
            },
            "header": {
                "customer": "Customer",
                "from": "From",
                "to": "To",
                "subject": "Subject",
                "date": "Date",
                "reason": "Reason",
                "trust": "Trust",
                "notes": "Notes",
                "disposition": "Disposition",
                "hold": "Hold",
                "size": "Size",
                "spam": "Spam",
                "tap": "TAP",
                "justification": "Justification",
                "user_just": "User Just.",
                "list_address": "List Address"
            },
            "title": {
                "when": "When message was quarantined",
                "why": "Why message was quarantined",
                "spam_score": "Spam score",
                "trust_score": "Trust score",
                "user_just": "User Justification",
                "tap_score": "Targeted Attack Protection score",
                "justification": "Justification",
                "last_action": "Last action taken by customer on the message",
                "hold": "Messages which are put on hold will not age out of the central quarantine"
            }
        },
        "wizard": {
            "name": {
                "sep_setup": "Social Engineering Protection Setup",
                "sep_policy": "Social Engineering Protection Policy"
            },
            "label": {
                "vips": "VIPs",
                "vip_titles": "VIP Titles",
                "whitelist": "Whitelist",
                "internal_domains": "Internal Domains",
                "trust_scores": "Trust Scores",
                "message_banners": "Message Banners",
                "authentication": "Authentication",
                "setup_assistant": "Setup Assistant",
                "policy_assistant": "Policy Assistant",
                "overview": "Overview",
                "introduction": "Introduction",
                "inbound_actions": "Inbound Actions",
                "outbound_actions": "Outbound Actions",
                "summary": "Summary",
                "sampling": "Sampling",
                "option_apply_whitelist": "Apply company whitelists to authentication checks",
                "spf_full": "Sender Policy Framework (SPF)",
                "enable_spf": "Enable SPF Checks",
                "spf_action": "inbound messages failing SPF checks",
                "dkim_full": "DomainKeys Identified Mail (DKIM)",
                "enable_dkim": "Enable DKIM Checks",
                "dkim_action": "inbound messages failing DKIM checks",
                "dmarc_full": "Domain-based Message Authentication, Reporting & Conformance (DMARC)",
                "dmarc_conform": "Conform to sender's DMARC Policy",
                "check_attachments": "Check messages containing attachments against",
                "check_archive_attachments": "Check messages containing archive attachments against",
                "enable_wb_lists": "Apply company white and black lists to spam filtering",
                "enable_user_wb_lists": "Apply user white and black lists",
                "delete": "Delete",
                "admin_quarantine": "Admin Quarantine",
                "user_quarantine": "User Quarantine",
                "prepend_subject_with_spam": "Prepend subject with \"[Spam] \"",
                "marketing_check": "Check messages containing marketing information",
                "tap_apply_domain_whitelist": "Apply company email\/domain whitelists to the TAP phase",
                "tap_apply_ip_whitelist": "Apply company IP whitelists to the TAP phase",
                "malicious": "Malicious",
                "suspect": "Suspect",
                "tap_gateway_analysis": "TAP - Gateway Analysis",
                "tap_click_time_enable": "Enable ClickTime Protection",
                "red": "Red",
                "amber": "Amber",
                "green": "Green",
                "inbound_dlp_whitelist": "Bypass inbound filtering if sender matches items in",
                "outbound_dlp_whitelist": "Bypass outbound filtering if recipeint matches items in",
                "check_ccn": "Check messages for credit card numbers",
                "check_ssn": "Check messages for social security numbers",
                "profane_language": "Check messages containing profane language",
                "check_for_matching": "Check messages for content matching",
                "check_attachments_against": "Check messages containing attachments against",
                "check_attachments_banned_names": "Check messages containing banned attachment names against",
                "check_attach_images": "Check messages containing image attachments",
                "check_attach_audio": "Check messages containing audio attachments",
                "check_attach_video": "Check messages containing video attachments",
                "check_category_content": "Check messages against category content lists",
                "banned_recipients": "Check messages for recipients matching",
                "archive_all_inbound": "Archive all inbound messages",
                "archive_all_outbound": "Archive all outbound messages",
                "archive_external": "Archive all messages to the specified address",
                "email": "Email",
                "ee_bypass_subject": "Bypass encryption if subject matches items in",
                "ee_exception_sender": "Never encrypt email from senders in",
                "ee_exception_recipient": "Never encrypt email to recipients in your",
                "ee_cc": "Encrypt messages containing credit card numbers",
                "ee_ssn": "Encrypt messages containing Social Security card numbers",
                "ee_ein": "Encrypt messages containing employer identification numbers",
                "ee_attachments": "Encrypt messages containing attachments against",
                "ee_list_recipients": "Encrypt messages to recipients in",
                "ee_list_subjects": "Encrypt messages with subject matching items in",
                "ee_list_content": "Encrypt messages with content matching items in",
                "apply_disclaimer": "Apply disclaimer to outbound emails"
            },
            "title": {
                "confirm_vips": "Confirm VIPs",
                "setup_whitelist": "Set Up Whitelist",
                "setup_internal_domains": "Set Up Internal Domains",
                "configure_trust_scores": "Configure Trust Scores",
                "sender_authentication": "Sender Authentication",
                "ts_message_banners": "Trust Score Message Banners",
                "sep_policy_summary": "Social Engineering Protection Policy Summary",
                "policy": "Policy",
                "other_rules": "Other Rules",
                "attachments": "Attachments",
                "attachment_checks": "Attachment Checks",
                "wb_lists": "White and Black Lists",
                "apply_wb_lists": "Apply White and Black Lists",
                "spam_thresholds": "Spam Thresholds",
                "marketing_check": "Marketing Check",
                "sep_threat_level": "SEP Threat Level Actions",
                "tap_whitelist": "TAP Whitelist",
                "tap_threat_level": "TAP Threat Level Actions",
                "click_time_checks": "ClickTime Checks",
                "dlp_whitelist": "DLP Whitelist",
                "pii": "PII",
                "personal_id_numbers": "Personal Identification Numbers",
                "credit_cards": "Credit Cards",
                "social_security": "Social Security",
                "profane_language": "Profane Language",
                "banned_content": "Banned Content",
                "banned_attachments": "Banned Attachments",
                "banned_attachment_types": "Banned Attachment Types",
                "category_content": "Category Content",
                "content_category_lists": "Category Content Lists",
                "banned_recipients": "Banned Recipients",
                "internal_archive": "Internal Archive",
                "external_archive": "External Archive",
                "bypass_subject_list": "Bypass Encryption Subject List",
                "ee_bypass_subjects": "Bypass Subjects",
                "ee_exception_lists": "Encryption Exception Lists",
                "exceptions": "Exceptions",
                "ee_pii": "Encrypt Personal Identification Numbers",
                "ee_attachments": "Encrypt Attachments",
                "ee_lists": "Encryption Lists",
                "add_disclaimer": "Add Disclaimer",
                "create_spam_policy": "Create Spam AV Policy",
                "create_in_dlp_policy": "Create Inbound DLP Policy",
                "create_out_dlp_policy": "Create Outbound DLP Policy",
                "marketing": "Marketing",
                "create_ee_policy": "Create Email Encryption Policy"
            },
            "description": {
                "in_avas_policy": "Create your initial or reset your spam and anti-virus policy.",
                "avas_overview": "This wizard will walk you though the basic anti-spam policy settings. It will generate rules which you can then edit individually. You can also use this wizard to reset your policy at any time.",
                "in_dlp_policy": "Create your initial or reset your inbound DLP policy.",
                "in_dlp_overview": "This wizard will walk you though the basic inbound DLP policy settings. It will generate rules which you can then edit individually. You can also use this wizard to reset your policy at any time.",
                "out_dlp_policy": "Create your initial or reset your outbound DLP policy.",
                "out_dlp_overview": "This wizard will walk you though the basic outbound DLP policy settings. It will generate rules which you can then edit individually. You can also use this wizard to reset your policy at any time.",
                "sender_auth": "Use DMARC, DKIM and\/or SPF authentication to verify sender identity.",
                "attach": "Check messages containing banned attachments.",
                "apply_wb_lists": "Apply company and user email\/domain lists and IP white and black lists.",
                "spam_thresholds": "Your spam filtering service provides advanced analysis of email content to determine the likelihood that email messages are spam. Using analysis tools by Cloudmark and Brightmail, we can rate the likelihood that a message is spam, from a low-end of 0 (not spam) to a high-end of 5 (extremely likely spam).",
                "marketing_check": "Check inbound email containing marketing information.",
                "inbound_sep_threat_level": "Select action to take for each inbound SEP threat level.",
                "outbound_sep_threat_level": "Select actions to take for replies or forwards of messages with SEP threats.",
                "tap_whitelist": "Apply company IP and email\/domain whitelists to the TAP phase.",
                "tap_threat_level": "Your TAP filtering service provides advanced analysis of email content to determine the likelihood that email messages contain malicious content. Using advanced analysis tools, we can rate the likelihood that a message is malicious.",
                "click_time": "Perform ClickTime checks on all inbound messages. Links in emails will be checked when the recipient clicks on them and access will be blocked if the link is malicious.",
                "inbound_dlp_whitelist": "Bypass inbound content filtering",
                "outbound_dlp_whitelist": "Bypass outbound content filtering",
                "check_pii_info": "Check for personally identifiable information.",
                "search_credit_cards": "Search for credit card numbers.",
                "profane_language": "Check messages containing profane language.",
                "banned_content": "Check messages with content matching Content Control list.",
                "banned_attachments_recips": "Check attachments against banned recipients and attachment names.",
                "banned_attachment_types": "Search messages for attachments matching image, audio or video content types.",
                "content_category_lists": "Check messages against selected category content lists.",
                "banned_recipients": "Check messages for recipients matching Outbound Banned Recipients list.",
                "archive_all_inbound": "Archive all inbound messages.",
                "archive_all_outbound": "Archive all outbound messages.",
                "archive_external": "Archive messages to the specified address.",
                "ee_bypass": "Bypass Email Encryption if subject contains terms in the Outbound Bypass Subjects list.",
                "ee_exceptions": "Sender and recipient exception lists.",
                "ee_pii": "Encrypt or securely send messages containing personally identifiable information (CC, SSN, EIN).",
                "ee_attachments": "Encrypt outbound email containing attachment file extensions that match items in your Email Encryption Attachments list.",
                "ee_lists": "Encrypt or securely send messages with senders, recipients, or content matching lists.",
                "add_disclaimer": "Add disclaimer to all outbound messages.",
                "ee_policy": "Create Email Encryption policy.",
                "ee_overview": "This wizard will walk you through creating the basic Email Encryption rules. It will generate rules which you can then edit individually."
            },
            "help": {
                "more_info": "More info",
                "sep_main1": "Get started with setting up your Social Engineering Protection configuration and policy.",
                "sep_main2": "The setup assistant will guide you through the configuration of Social Engineering Protection. You do not need to complete the configuration in one session, and may come back to this setup assistant at any time.",
                "sep_main3": "Before you begin, please ensure you have access to:",
                "sep_main4": "Your organization's DNS settings",
                "sep_main5": "The domains used to send mail from your organization",
                "sep_main6": "While not required to use the service, it is strongly recommended to complete the entire setup assistant, as it will improve the accuracy and prevent false positives.",
                "sep_main7": "We recommend waiting until the 4-5 week learning period is complete before enabling any policy setting that will impact mail flow.",
                "sep_vip1": "The first step in the setup assistant is to confirm VIPs which the system has pre-determined. VIPs are the most likely individuals in your organization to be the victim of identity impersonation. VIPs are automatically selected based on title. For example, VP, CFO., etc. We recommend that you only set executives as VIPs to minimize false positives.",
                "sep_vip_view_list": "View VIP titles list",
                "sep_vip2": "Please review the selected list below and make changes as needed. You may manually set any user as a VIP by adding them to the list below. You may also remove users from the list.",
                "sep_vip_more1": "Executives (such as CEOs, board members, and directors) and other users who deal with sensitive information are at a higher risk of being spoofed than regular users. To protect high-risk users from malicious attacks, assign those users VIP status. Social Engineering Protection monitors the similarity between an incoming email\u2019s display name and email address and those of your VIP users, as one of the many features of an email that indicate likelihood of it being a social engineering attack.",
                "sep_vip_more2": "SEP only considers similarity to VIPs (rather than all employees) in order to minimize false positives. A false positive is where SEP indicates that an email is an attack whereas, in fact, it isn\u2019t. Especially in a large organization, if SEP were to check for address\/name similarity against all employees, then many more incoming emails would be flagged as potential social engineering attacks\u2026 whereas, in fact, many of those would just be emails from people who happened to have the same name as someone within the your organization.",
                "sep_vip_more3": "In small organizations, the false-positive risk diminishes. If your organization is <100 users, you might like to try assigning all of your users as VIPs. If you do this, pay particular attention to false positives via the SEP Reporting. If you see many emails being caught because of name \/ address VIP similarity, then thin out the VIPs.",
                "sep_vip_more4": "Always avoid assigning generic email accounts as VIPs. For example, setting sales@, info@, support@ as VIPs would very likely increase false positives (because other companies will send email using those names, too) and should be avoided.",
                "sep_vip_more5": "Final note: it requires more than just a name\/email-VIP-match to flag an email as a social engineering attack. There will be other risk factors present too, which our analytics model considers.",
                "sep_vip_further_edit": "You can further edit VIPs in User Management \/ Users.",
                "sep_whitelist1": "You may apply any whitelisted email addresses or domains to Social Engineering Protection. Authenticated messages from senders on the whitelist will receive a high trust score and will be unlikely to be subject to policy actions. No further policy actions are necessary to apply the whitelist.",
                "sep_whitelist2": "For a message to be considered authenticated, it must pass SPF, DKIM or DMARC. If a sender's domain does not support message authentication, you may add the IP address for the entry and if messages from the sender match the IP address the message will be considered authenticated.",
                "sep_whitelist3": "Select the whitelist entries to you want to apply to Social Engineering, then click Apply to Social Engineering Protection. You may also add new entries to the list and select the services you would like to whitelist against using the Actions menu.",
                "kyog_sep_whitelist_further_edit": "You can further edit the whitelist under Email Security \/ White List. Items can also be added to the whitelist from the Admin Quarantine.",
                "sep_whitelist_further_edit": "You can further edit the whitelist under Email Security \/ Policy \/ White and Black Lists. Items can also be added to the whitelist from the Admin Quarantine.",
                "sep_id1": "Please confirm the list of domains that send email on your organization's behalf, including primary\/alternate domains and third party domains which are considered internal, but whose Mail Exchanger (MX) Record does not point to our email gateway. Authenticated messages from these domains will not be subject to scoring and will not include trust banners.",
                "kyog_sep_id1": "Please confirm the list of domains that send email on your organization's behalf, including primary\/alternate domains and third party domains which are considered internal. Authenticated messages from these domains will not be subject to scoring and will not include trust banners.",
                "sep_id2": "You can choose to suppress the trust score banner on authenticated messages from these domains.",
                "sep_id3": "If the domain does not support authentication you can include the IP addresses associated with the domain.",
                "sep_id_further_edit": "You can further edit the internal domains under Email Security \/ Setup \/ Social Engineering Lists.",
                "kyog_sep_id_further_edit": "You can further edit the internal domains under Email Security \/ Setup \/ Social Engineering Protection.",
                "sep_ts1": "All inbound messages will receive a trust score from 0 to 100. 0 is fraudulent, 100 is highly trustworthy. The trust scores are divided into 3 ranges: Green - trusted, Amber - suspect, and Red - likely fraudulent.",
                "sep_ts2": "Trust score ranges will determine the color of the banner applied to each message. You will be prompted to set policy actions (such as quarantine) based on these settings at an upcoming step in the setup assistant. We recommend that you do not change the trust score ranges before the end of the learning period.",
                "sep_ts3": "Descriptions will be displayed in the trust score banners if you choose to add them to messages.  The default messages are listed below and can be edited.",
                "sep_ts4": "You may choose whether to remove the trust score banner when messages are released from the quarantine.",
                "sep_ts_further_edit": "You can further edit trust score settings under Email Security \/ Setup \/ Social Engineering Protection.",
                "kyog_sep_ts_further_edit": "You can further edit message banners under Email Security \/ Setup \/ Message Banners.",
                "sep_mb1": "Message banner text to come.",
                "sep_mb2": "Message banner text2 to come.",
                "sep_auth1": "Using sender authentication is recommended to ensure your trust scores are accurate and safeguard your corporate domain. Please review the instructions to configure SPF, DKIM, and DMARC. The interface can assist with configuration of each authentication framework.",
                "sep_auth_further_edit": "Sender Authentication can be found in Email Security \/ Setup \/",
                "sep_policy1": "When Social Engineering Protection is first enabled, it learns your environment and typical mail flow patterns over a period of several weeks.  During this time, we recommend not taking any actions or applying message banners. The default policy will take no action, and simply monitor messages to view in the Social Engineering Protection Overview report.",
                "sep_policy2": "Please monitor the reports closely during the learning period, and make any appropriate changes to your environment. We strongly recommended that you do not take actions which will divert mail flow (such as quarantine of red messages) until several weeks after the initial deployment.",
                "sep_policy_further_edit": "The policy can be edited under Email Security \/ Policy \/",
                "sep_policy_itp_further_edit": "The policy can be edited under Email Security \/ Policy \/",
                "sep_policy_select_sep": "Select the SEP phase.",
                "sep_spf1": "To enable SPF protection for your company's outbound email perform the following steps:",
                "sep_spf_step1": "Click Email Security in the navigation at the top of your screen. Next, select Setup \/ Sender Authentication from the menu on the left side of your screen.",
                "sep_spf_step2": "For each of your company's email domains that send outbound mail through BAE Systems, create or edit your SPF entry in your DNS TXT and SPF records to contain the following string: 'include:spf.usa.net'.",
                "sep_spf_step3": "Select a desired domain to view the current SPF record for your domain.",
                "sep_spf_step4": "Select a desired domain and click 'Test SPF record' to test your current SPF record.",
                "sep_spf_step5": "You will see two results for this test. If you have not created an SPF record for your domain, you should see a status of 'NONE' for both tests. If you have created an SPF record for your domain, you should expect to see the following:",
                "sep_spf_step5_good": "Good sender test - Should always return PASS.",
                "sep_spf_step5_bad": "Bad sender test - Should return one of the following, depending upon your SPF strictness: FAIL, SOFTFAIL, or NEUTRAL",
                "sep_dkim1": "To enable DKIM protection for your company's outbound email perform the following steps:",
                "sep_dkim_step1": "Click Email Security in the navigation at the top of your screen and then click Setup \/ Sender Authentication.",
                "sep_dkim_step2": "In the DKIM section, select the intended domain (if you more than one).",
                "sep_dkim_step3": "Click Generate New Key to create a key.",
                "sep_dkim_step4": "Select the new record in the table to view the public key.",
                "sep_dkim_step5": "Install the key in your DNS records. This step requires access to your DNS records. The format will be show in the view dialog.",
                "sep_dkim_step6": "Wait about an hour for the DNS record to fully propagate.",
                "sep_dkim_step7": "Click Test Record in the view dialog to ensure the new DNS record matches.",
                "sep_dkim_step8": "Activate the key by clicking the dash icon in the table. This will deactivate any currently active key.",
                "sep_dkim_note1": "Messages with DKIM signatures use a key to sign messages. Messages signed with short keys (keys less than 1024 bit) can be easily spoofed (see ",
                "sep_dkim_note_link": "http:\/\/www.kb.cert.org\/vuls\/id\/268267",
                "sep_dkim_note2": "), so a message signed with a short key is no longer an indication that the message is properly authenticated. To best protect our users, emails signed with less than 1024-bit keys are considered unsigned. To further enhance security, customers are also allowed to sign their outbound mail with keys that are 1024-bits long.",
                "sep_dmarc1": "Before implementing DMARC, you must first configure either an SPF or DKIM record on all outbound mail streams. For best results we recommend that you configure BOTH SPF and DKIM records on all outbound mail streams. DMARC relies upon SPF and DKIM technologies to ensure signature integrity. If you have configured both SPF and DKIM records, the DMARC check will pass if either the SPF or DKIM check passes. DMARC can break your mail \ufb02ow if you do not set up SPF and\/or DKIM before you con\ufb01gure DMARC.",
                "sep_dmarc2": "Steps to enable DMARC protection for your company's outbound mail:",
                "sep_dmarc_step1": "Click Email Security in the navigation at the top of your screen and then click Setup \/ Sender Authentication.",
                "sep_dmarc_step2": "For each of your company's email domains, ensure that you have valid SPF records and enabled DKIM keys.",
                "sep_dmarc_step3": "Create email accounts that can receive daily DMARC aggregate reports for each of your domains.",
                "sep_dmarc_step4": "For each domain, click edit to access the Outbound DMARC Configuration dialog to define your desired DMARC settings and create a DNS TXT record for _dmarc.your_domain.com.",
                "sep_sampling_further_edit": "You can edit the SEP Sampling Opt-out List under Email Security \/ Setup \/",
                "sep_intro1": "This is your current Social Engineering Protection Policy.",
                "sep_rule_warning": "We recommend that you do not enable any rules that will affect mail flow until the learning period is complete.",
                "sep_policy_summary": "You policy will perform the policy actions on messages.",
                "itp_other_rules": "Warning: Your policy has rules which cannot be managed with the Policy Assistant. They will be removed if you save changes to the policy here. You can edit those rules in the Policy Editor SEP phase. For more complex rules, you can reset your initial policy here and then make further changes in the Policy Editor.",
                "unpublished_changes": "Warning: Your policy has unpublished changes that will be published if you save changes here. Please confirm that the changes are ready to be published.",
                "sender_auth": "Exempt messages from senders on company whitelist for spam or IP Whitelist from authentication checks.",
                "sender_auth_more": "Note that if the entry on the domain\/email whitelist requires authentication and the sender does not pass authentication, the entry will not be considered whitelisted. You may, however, add their IP address to the entry and if the message is sent from that IP address it will be whitelisted.",
                "spf": "SPF is a technology designed to prevent spam, fraud, computer worms, and phishing through email. In most cases of email abuse, the sender's address is forged. SPF prevents email fraud by allowing receiving email systems to verify whether the sending IP address is an allowed sender, and not an open relay.",
                "dkim": "DKIM is a method for associating a domain name to an email message, thereby allowing a person, role, or organization to claim some responsibility for the message. DKIM allows receivers to check whether messages actually originated from the sending domain, by verifying a digital signature against a public key stored in DNS.",
                "dmarc": "DMARC standardizes how email receivers perform email authentication using the well-known SPF and DKIM mechanisms.",
                "attach": "<p>Check inbound email containing attachment file extensions that match items in your Managed Banned Attachments list.<\/p>\n<p>Search archive attachments (zip, rar, etc) on inbound email and look for items matching your Archive Banned Attachment list.<\/p>\n<p>Manage lists by clicking the links.<\/p>\n",
                "dmarc_more_info": "<p>(DMARC) standardizes how email receivers perform email authentication using the well-known SPF and DKIM mechanisms. This means that senders will experience consistent authentication results for their messages for any other email receiver implementing DMARC. A DMARC policy allows a sender to indicate that their emails are protected by SPF and\/or DKIM, and tells a receiver what to do if neither of those authentication methods passes.<\/p>\n<p>Enabling DMARC checks will check for a sender's DMARC record when receiving mail, and if one is present, it will override the 'Enable SPF' and 'Enable DKIM' checks and defer to the sender's DMARC policy instead. If the DMARC policy specifies a 'quarantine' action, the mail will be placed in the 'Admin Quarantine', and if the DMARC policy specifies a 'reject' action, the mail will be deleted.<\/p>\n<p>'Conservative' will take the specified action dictated by the sender's DMARC policy. 'Standard' will take the specified action dictated by the sender's DMARC policy, but will do a policy override if the message has been forwarded or sent from a mailing list.<\/p>\n",
                "wb_lists": "You have control to determine which senders are allowed to send email to your end users. You can use your black list to either discard or quarantine email. You can use your whitelist to allow email to bypass your spam filtering service.",
                "spam_thresholds": "<p>Specify actions to take depending on spam scores.<\/p> <p>The discard threshold must be the highest and the prepend threshold the lowest.<\/p>",
                "marketing_check": "Check inbound email containing marketing information. This filter may pick up messages that your end users have opted into. Your users may need to whitelist some addresses.",
                "tap_whitelist": "You can use your whitelist to allow email to bypass your TAP filtering service.",
                "tap_actions": "Select actions for suspected and malicious message.",
                "tap_actions_more_info": "<p>TAP Actions<\/p>\n<p>Monitor - Deliver the message to the intended recipient and record for reporting purposes.<\/p>\n<p>Send to Admin Quarantine - Redirect the message to the Admin Quarantine for review.<\/p>\n<p>Discard - Discard the message without delivering it to any inbox or quarantine.<\/p>\n<p>Tag Subject - Append the text 'Suspected Malicious' to the subject header of the message. This action alerts the email recipient to possible suspect content prior to opening the message.<\/p>\n",
                "sep_inbound_actions": "Select the action to take for inbound messages at each level.",
                "sep_outbound_actions": "You may take actions on outbound messages that are replies or forwards of messages with red or amber trust scores.",
                "inbound_dlp_whitelist": "If the sender matches items in your Content Filtering Whitelist list, then bypass all inbound content filtering.",
                "outbound_dlp_whitelist": "If a recipient matches items in your Content Filtering Whitelist list, then bypass all outbound content filtering.",
                "check_pii_info": "Check messages for personal information. Identification numbers must be properly formatted and pass known validation checks.",
                "check_ccn": "Check messages for credit card numbers. CCN must be properly formatted and pass known validation checks.",
                "check_ssn": "Check messages for social security numbers. SSN must be properly formatted and pass known validation checks.",
                "profane_language": "Maintain a list of weighted profane words that are banned from being sent. Click on the Managed Bad Language list to add items, remove items, or change weights in the list. Messages will be caught if the total score is greater than or equal to 100.",
                "inbound_banned_content": "Maintain a list of regular expressions that are banned from your inbound email. Click on the Inbound Content Control list to add or remove items from the list.",
                "inbound_banned_attachments": "Maintain a list of recipients that are banned from receiving inbound email that contains attachments.",
                "outbound_banned_content": "Maintain a list of regular expressions that are banned from your outbound email. Click on the Outbound Content Control list to add or remove items from the list.",
                "outbound_banned_attachments": "Search attachments, including archives (zip, rar, etc) on outbound email and look for items matching your Managed Banned Attachment list. You can manage your own attachment file extensions by following the Managed Banned Attachments list link.",
                "maintain_banned_attachment_list": "Maintain a list of banned attachment names that are checked against inbound emails.",
                "maintain_banned_attachment_list_out": "Maintain a list of banned attachment names that are checked against outbound emails.",
                "banned_recipients": "Maintain a list of recipients that are banned from your outbound email.",
                "outbound_attachment_banned_senders": "Maintain a list of senders that are banned from sending outbound email that contains attachments.",
                "separate_multiple_comma": "Enter one or more email addresses. Separate multiple addresses with a comma.",
                "ee_bypass": "<p>If the subject matches items in your Outbound Bypass Subjects list, then bypass all Email Encryption filtering.<\/p> <p>Note that archive and disclaimer rules, as well as other non-encryption rules you add, should come before this rule or may not be processed.<\/p>",
                "ee_exception_sender": "Never encrypt email from the senders in your Sender Exception list.",
                "ee_exception_recipient": "Never encrypt email to recipients in your Email Encryption Recipient Exception list.",
                "ee_encrypt": "Encrypt email that contains identification numbers that should never be delivered without being encrypted. Identification numbers must be properly formatted and pass known validation checks.",
                "ee_send_securely": "Send Securely will send the message via TLS if the recipient domain supports it, otherwise it will be encrypted. The domain must support a minimum protocol version of TLSv1 and a Medium minimum cipher level.",
                "click_time": "You may add common trusted URLs to the ClickTime URL Whitelist to prevent ClickTime wrapping the links."
            }
        },
        "publish": {
            "error": {
                "get_policy": "Error getting policy for publishing"
            }
        },
        "reports": {
            "label": {
                "sep_trends": "SEP Trends",
                "tap_thrends": "TAP Trends",
                "recent_threats": "Recent Threats",
                "top_employees_sep_threats": "Top Employees Receiving SEP Threats",
                "top_domains_sending_sep_threats": "Top Domains Sending SEP Threats",
                "top_vip_spoofed": "Top VIP Users Being Spoofed",
                "top_employees_tap_threats": "Top Employees Receiving TAP Threats",
                "top_domains_sending_tap_threats": "Top Domains Sending TAP Threats",
                "top_users_clicking_tap_links": "Top Users Clicking on Malicious TAP Links",
                "top_x_employees_receiving_threats": "Top Employees Receiving Threats",
                "message_tracking": "Message Tracking",
                "daily_messaging_statistics": "Daily Messaging Statistics",
                "tag_statistics": "Tag Statistics",
                "content_filtering": "Content Filtering",
                "dmarc_summary": "DMARC Summary",
                "message_geo_tracking": "Message Geo Tracking",
                "messaging_dashboard": "Messaging Dashboard",
                "spam_activity": "Spam Activity",
                "spam_trending": "Spam Trending",
                "top_message_tags": "Top Message Tags",
                "sep_overview": "SEP Overview",
                "tap_status": "TAP Status",
                "top_threat_sources": "Top Threat Sources",
                "top_messaging_users": "Top Messaging Users",
                "virus_activity": "Virus Activity",
                "attachment_search": "Attachment Search",
                "justification_search": "Justification Search",
                "tag_search": "Tag Search"
            },
            "message": {
                "not_purchased_service": "You have not yet purchased the %service% service.",
                "sure_remove_vip": "Are you sure you want to remove %user% from the VIP List?'",
                "removing_vip": "Removing VIP..."
            },
            "heading": {
                "service": "%service% Reports"
            }
        },
        "setup": {
            "label": {
                "domain_name": "Domain Name",
                "key_size": "Key Size (bits)"
            },
            "error": {
                "invalid_domain": "%domain% is not a valid domain for this customer."
            },
            "authentication": {
                "new_key_dialog_help1": "The recommended size for a DKIM key is 2048 bits as that will give greater security. However, some older DNS servers do not support keys of that size.",
                "new_key_dialog_help2": "Please check your DNS server specification and choose a 1024 bit key size if neccessary."
            }
        },
        "login_page": {
            "login_title": "Security Management Console",
            "login_heading": "Login to %product%",
            "login_button": "Login",
            "supported_browsers": "The Security Management Console supports the following browsers: Chrome, FireFox, Safari and IE10+.",
            "forgot_password_link": "Forgot your password?",
            "saml_sso_link": "Remote Single Sign On",
            "auto_login_message": "Authenticating.. Please wait.",
            "will_redirect": "This page will redirect automatically in %timeout% second.|This page will redirect automatically in %timeout% seconds.",
            "sr_only_label": "Home",
            "error": {
                "failed_to_authenticate": "Failed to authenticate.",
                "incorrect_credentials": "The user name or password you entered is incorrect.",
                "locked": "This account has been locked because of too many failed login attempts. You must wait for the lockout to expire or reset your password using the link below. If you are still unable to login, contact your administrator to have your password reset.",
                "expired": "Your password has expired. Please enter a new password.",
                "restrictedip": "Restricted IP Addresses are enabled.  Please contact your administrator to have your address authorized.",
                "tfa_failed_attempts": "Too many failed login attempts. If you are still unable to login, contact your administrator.",
                "no_saml_sso": "Single Sign-on not configured for this Customer.",
                "saml_sso_required": "Remote SSO Login required for this Customer.",
                "unknown_error": "An unknown error occurred. Could not obtain a valid SMC session."
            },
            "warning": {
                "unsupported_browser": "Your browser is not supported. Your experience may be compromised."
            }
        },
        "account": {
            "branding_options": {
                "customized_logo": {
                    "description": "<p>Upload your own logo to replace the default logo at the top left corner of screen for your users.<\/p><p>File size must be less than 65k. Only .jpg, .gif or .png files are supported.<br>Logo aspect ratio is 236 pixels wide by 56 pixels high.<br>Larger logos will be scaled down to fit.<\/p>",
                    "label": "Customized Logo",
                    "no_permission": "Logo upload requires the edit account permission.",
                    "note": "Note: Default BAE logo will be used",
                    "upload_label": "Send this file"
                },
                "no_brand_allow": "No Branding Allowed.  Please contact your partner administrator.",
                "quarantine_notification": {
                    "address": {
                        "error": "Please enter a valid email",
                        "help": "Optionally, input an email address that your Quarantine Notifications will be sent from. This will replace the default notification email address - quarantine@baesystems.com. This must be a valid email address in the company domain.",
                        "label": "From Address"
                    },
                    "label": "Quarantine Notifications",
                    "message": {
                        "help": "<p>Compose an optional message to be appended to all Quarantine Notifications. This will replace the default message: \"This is an automated message from mbox.net. Please do not respond!\".<\/p><p>Input the messages as plain text. Line breaks will not be displayed in the Quarantine Notification.<\/p><p>Please limit the message to 3995 characters or less.<\/p>",
                        "label": "Optional Message",
                        "placeholder": "This is an automated message from mbox.net. Please do not respond!"
                    },
                    "title": "Quarantine Notification Branding Options"
                },
                "saved_completed_error": "Customer settings could not be updated",
                "saved_completed_invalid": "Please fill in all required fields (Valid Email)",
                "saved_completed_notice": "Settings updated successfully"
            },
            "created": "Account created",
            "details": {
                "account_options": {
                    "enterprise_managed_security": "Enterprise Managed Security",
                    "generate_web_proxy_passwords": "You have <span id=\"user-count\"><\/span> account(s) that do not have a web proxy password.",
                    "notify_new_users": "Notify New Users",
                    "vuma": "Vulnerability Management link"
                },
                "contact_details": {
                    "billing_address": "Billing Address",
                    "office_address": "Office Address",
                    "postal_address": "Postal Address",
                    "field_required_msg": "Enter %field_name% for the contact person",
                    "first_name": "First Name",
                    "last_name": "Last Name",
                    "email": "Email Address",
                    "email_format": "Enter a valid email address for the contact person",
                    "addr_1": "Address 1",
                    "addr_2": "Address 2",
                    "city": "City",
                    "state": "State",
                    "postal_code": "Postal Code",
                    "postal_code_format": "Please provide a valid postal code",
                    "postal_code_format_not_blank": "Please provide a postal code that is valid for the selected Country",
                    "country": "Country",
                    "country_required_msg": "Select the country in which your organization is located",
                    "work_phone": "Work Phone",
                    "mobile_phone": "Mobile Phone",
                    "phone_format": "Only numbers and dash(-) are allowed for %field_name%. Eg: 601-090-9090",
                    "fax": "Fax"
                },
                "ip_restricted_list": "IP Restricted List",
                "password_changed_error": "Current password is incorrect",
                "password_changed_notice": "Your password has successfully been changed",
                "saved_completed_notice": "The following fields were saved successfully",
                "service_info": {
                    "current_status": "Current status",
                    "dlp_api_key": "DLP API Key",
                    "no_key_assigned": "No key assigned",
                    "number_of_users": "Number of users",
                    "services": "Services",
                    "updating": "updating"
                },
                "sm_address": "Contact Addresses",
                "sm_info": "Contact Info"
            },
            "name": "Account name"
        },
        "audit_log_action": {
            "account_settings": "Account Settings Updated",
            "documents": "Document Management",
            "directory_services": "Directory Services Updated",
            "distribution_lists": "Distribution Lists Updated",
            "email_settings": "Email Security Settings Updated",
            "ee_settings": "Email Encryption Settings Updated",
            "form": "Form Updated",
            "notification": "Notification Updated",
            "ou": "OUs Updated",
            "roles": "Roles Updated",
            "saml": "SAML Settings Updated",
            "se_settings": "SEP Settings Updated",
            "users": "Users Updated",
            "web_security": "Web Security Updated",
            "advance_password_notification_email": "Adv Pwd Exp Email",
            "change_control_authorized": "Support Ticket Change Control Authorized"
        },
        "branding": {
            "logging": {
                "logo_removed": "Branding logo removed.",
                "logo_updated": "Branding logo updated.",
                "notification_updated": "Quarantine notification options updated."
            }
        },
        "tooltips": {
            "select_date": "Select Date",
            "select_time": "Select Time"
        },
        "cloud_passwords": {
            "help_text": "When this option is turned on, your users have the ability to change their cloud passwords and setup password recovery from a mobile device within the Email Security Portal. To disable cloud passwords, please see the <a href=\"%url%\" target=\"help_docs\">Account Options<\/a> section in our Knowledge Base.",
            "hybrid_note": "Cloud passwords, lockout, and expiration only apply to users not synced through exchange.",
            "label": "Cloud Passwords",
            "logging": {
                "disabled": "Cloud Passwords disabled.",
                "enabled": "Cloud Passwords enabled.",
                "updated": "Cloud Passwords updated."
            }
        },
        "email_encryption": {
            "error": {
                "activation": "Could not activate Email Encryption Services.",
                "activation_dlp_active": "Could not activate Email Encryption Services.  Customer has DLP and old Email Encryption is active.",
                "activation_url_not_configured": "Could not activate Email Encryption Services in database.  The URL provided must be configured on Email Encryption service.",
                "activation_in_db": "Could not activate Email Encryption Services in database.",
                "activation_req_av_ecf_dlp": "Could not activate Email Encryption Services.  You must activate Email AV\/AS, Email Content Filtering, or Full DLP Services.",
                "retrieve": "Failed to retrieve Email Encryption service info",
                "add": "Failed to add Email Encryption service. ",
                "update": "Failed to update Email Encryption service. "
            },
            "provision": {
                "success": "Email Encryption successfully provisioned.",
                "success_with_update": "Email Encryption successfully provisioned.  You must publish Email Encryption rules before using the service."
            },
            "service": {
                "add": "Adding Email Encryption Service",
                "update": "Updating Email Encryption Service",
                "dependencies": "An email service is required to assign Archiving or Email Encryption Service."
            },
            "policy": {
                "blackwhitelist_note": "Mail from email addresses in this list will always be %action%, irrespective of filter policy. The following formats are accepted:",
                "blackwhitelist_guide": "<dt class=\"bf\">user@domain.tld<\/dt><dd>matches the exact email address<\/dd><dt class=\"bf\">@domain.tld<\/dt><dd>matches all emails in the specified domain<\/dd><dt class=\"bf\">@.domain.tld<\/dt><dd>matches all emails in the specified domain, including subdomains<\/dd><dt class=\"bf\">@.tld<\/dt><dd>matches all emails in top level domains<\/dd>",
                "example": "Example",
                "lbl_email_blackwhitelist": "Email addresses to %action%",
                "upload": "Upload",
                "upload_blackwhitelist": "Upload %listName%",
                "upload_file": "Send this file",
                "upload_guide": "Upload a file that contains email addresses to %action%.",
                "upload_note": "Note: Only .txt and .csv files are supported."
            }
        },
        "generate_web_proxy_passwords": {
            "label": "Generate Web Proxy Passwords",
            "logging": {
                "enabled": "Generate Web Proxy Passwords."
            }
        },
        "ip_access": {
            "current_ip": "Your public IP address:",
            "help_text": "If enabled, users will only be able to access the Security Management Console from computers using one of the allowed IP addresses below. Do not enable this feature until you have created the list and be certain that your public IP address is in the list.",
            "label": "IP Restricted Access",
            "logging": {
                "disabled": "IP Restricted Access disabled",
                "enabled": "IP Restricted Access enabled",
                "ip_added": "Restricted IP added",
                "ip_deleted": "Restricted IP deleted",
                "updated": "IP Restricted Access updated"
            },
            "not_current": "Unable to enable restricted access because your public IP address is not in the list.",
            "update_error": "Unable to update restricted access.",
            "whitelist": "Restricted IP Addresses"
        },
        "roles_enabled": {
            "help_text": "Enabling Roles will allow you to create security groups and restrict access to specific users or groups of users. Please click <a href=\"%url%\">here<\/a> if you would like to learn more"
        },
        "knowledge_base": {
            "videos": {
                "accounts": {
                    "description": "view account info, update contact details, check quarantined messages, white\/black lists, password updates, support tickets",
                    "title": "Accounts"
                },
                "archive_compliance": {
                    "description": "compliance tutorial",
                    "title": "Archive Compliance"
                },
                "archive_config_part_1": {
                    "description": "profile details, portal settings, compliance settings, global compliance policy, privileged email, excluded email, keywords",
                    "title": "Archive Configuration Part 1"
                },
                "archive_config_part_2": {
                    "description": "manage roles, manage OUs, manage groups, manage users, manage supervisors, manage exclusions",
                    "title": "Archive Configuration Part 2"
                },
                "archive_holds": {
                    "description": "show holds menu, create hold, edit hold, new hold notification, edit hold notification",
                    "title": "Archive Holds"
                },
                "archive_messages_1": {
                    "description": "inbox, outbox, folders",
                    "title": "Archive Messages (Part 1)"
                },
                "archive_messages_2": {
                    "description": "search, advanced search",
                    "title": "Archive Messages (Part 2)"
                },
                "creating_a_rule_using_regular_expressions": {
                    "description": "lists overview, regular expression overview, create a regular expression list, create a rule, publish policy",
                    "title": "Creating a Rule Using Regular Expressions"
                },
                "dlp_advanced_rule_editing": {
                    "description": "policy phases, default inbound rules, default outbound rules, reports, publishing a policy",
                    "title": "DLP Advanced Rule Editing"
                },
                "dlp_part1": {
                    "description": "lists, templates, disclaimers",
                    "title": "DLP Part 1"
                },
                "dlp_part2": {
                    "description": "policy phases, add\/edit rules, publish policies",
                    "title": "DLP Part 2"
                },
                "email_encryption": {
                    "description": "setting policy, encryption example, encryption reports",
                    "title": "Email Encryption"
                },
                "email_security_1": {
                    "description": "admin quarantine, message actions, user quarantine, manager quarantine, quarantine options, user options, admin options, white\/black lists",
                    "title": "Email Security (Part 1)"
                },
                "email_security_2": {
                    "description": "mail routing, recipient domains, catch all mailbox, SPF",
                    "title": "Email Security (Part 2)"
                },
                "regular_expression_overview": {
                    "description": "What is a Regular Expression?, terms, bracket expressions, position searches, control searches, additional characters, regex in the Security Management Console",
                    "title": "Regular Expression Overview"
                },
                "reports": {
                    "description": "available reports, email security reports, mail flow reports, messaging dashboard, message geo tracking, message tracking, creating custom reports, exporting reports",
                    "title": "Reports"
                },
                "user_management1": {
                    "description": "create new users, edit existing users, upload users, upload aliases, upload exchange users",
                    "title": "User Management (Part 1)"
                },
                "user_management2": {
                    "description": "create distribution list, edit distribution list, upload distribution list, delete distribution list",
                    "title": "User Management (Part 2)"
                },
                "user_management3": {
                    "description": "create new host, server settings, connections and filters, attributes, synchronization",
                    "title": "User Management (Part 3)"
                },
                "user_management4": {
                    "description": "create new roles, assign roles, edit roles, delete roles, remove roles from users",
                    "title": "User Management (Part 4)"
                }
            }
        },
        "message": {
            "disabled": "disabled",
            "enabled": "enabled",
            "loading": "Loading...",
            "mss_no_permission": "You don't have permission to access any features on this page. Please contact your administrator."
        },
        "my_services": {
            "archiving": {
                "login_error": "Archiving login customer configuration error."
            },
            "cms": {
                "login_error": "CMS login customer configuration error."
            }
        },
        "my_settings": {
            "quarantine_notification": {
                "help_text": "Receive emails notifying you of mail in your quarantine.",
                "label": "Quarantine Notifications"
            },
            "mobile": {
                "country": "Country",
                "mobile": "Mobile Phone",
                "help_text": "Please enter a mobile number at which you can receive text messages. Registering a mobile number for your account is an important security step. With a mobile number registered, the risk of unauthorized access to your account is significantly reduced. Additionally, if you need to recover your password, a text message is the safest and most effective way to recover it. You may enter up to 5 numbers.",
                "help_text_ex": "Please enter a mobile number at which you can receive text messages. Registering a mobile number for your account is an important security step. With a mobile number registered, the risk of unauthorized access to your account is significantly reduced. You may enter up to 5 numbers."
            },
            "responses": {
                "update_phone": {
                    "invalid": "The phone number %phone% is not valid.",
                    "invalid_for_country": "The phone number %phone% is not valid for the selected country."
                }
            },
            "timezone": {
                "company_timezone": "Your company timezone is %companyTimezone%.",
                "no_user_timezones": "Note that your company does not allow notifications to be sent in your local timezone.",
                "user_timezone": "If you wish to receive quarantine notifications according to your own timezone you can set it here.",
                "unset": "You can unset your timezone by selecting 'Unset timezone' in the region field.",
                "set_timezone": "Set Timezone",
                "please_log_in": "Please log in to",
                "set_your_timezone": "set your timezone"
            }
        },
        "notify_users": {
            "logging": {
                "disabled": "Notify new users disabled.",
                "enabled": "Notify new users enabled."
            }
        },
        "partner": {
            "admin_contact": {
                "desc": "Please provide contact information for the initial customer administrator.",
                "email_hint": "Enter a valid email address for the admin.",
                "first_name_hint": "Enter the admin&rsquo;s first name.",
                "last_name_hint": "Enter the admin&rsquo;s last name.",
                "password": {
                    "hint": "Enter a valid password.",
                    "retype": {
                        "hint": "Confirm password",
                        "label": "Re-type Password"
                    },
                    "rules": "Must be at least 8 characters in length, and must include at least 3 out of 4 of the following character cases: upper case letter, lower case letter, numeric digit and special character (# $ % &, etc.)"
                }
            },
            "branding_options": {
                "company_name": "Partner company display name saved successfully.",
                "email_address": "Email address for support saved successfully.",
                "level_branding": "Partner branding options saved successfully."
            },
            "contact_details_desc": "Please provide contact information for the partner.",
            "delete_confirm": "Are you sure you want to delete partner account %partnerName%? All customers under the partner will also be deleted once the partner is deleted completely.",
            "header": {
                "account_options": "Account Options",
                "admin_account": "Administrator Account",
                "contact_details": "Contact Details",
                "partner_admin": "Partner Admins",
                "restricted_access": "Restricted Access",
                "tag": "Tag",
                "type": "Partner Type"
            },
            "new_admin": "New Admin",
            "partner_account_details": "Partner Account Details",
            "search": {
                "label": "Find a partner",
                "placeholder": "Enter a company name, contact name or email, or tag ID."
            },
            "tag_id": {
                "hint": "Enter the partner&rsquo;s Tag ID",
                "label": "Tag ID"
            },
            "create_partner": {
                "select_timezone": "Please select the closest city that has the same timezone as %contact_role%"
            }
        },
        "partner_services": {
            "allow_assignment": "Allow this partner to assign %service% services.",
            "allow_mssp": "Allow this partner to manage %service% services for supported network devices.",
            "email_security_required": "Either %exchange%, %cms%, or %email_security% is required to assign %service%."
        },
        "pending_task": {
            "account_activation_failed_msg": "Account Activation Failed",
            "account_deletion_failed_msg": "Account Deletion Failed",
            "activate": "activate",
            "activate_completed_msg": "activate completed",
            "activate_pending_account": "Activate pending account",
            "activate_pending_customer": "Activating pending customer",
            "activate_result": "activate result",
            "activate_succeeded_msg": "activate succeeded",
            "activating": "activating",
            "approval_completed": "Approve completed",
            "approval_succeed": "Approve succeeded",
            "approve": "Approve",
            "approve_pending": "Approving pending",
            "approve_result": "approve result",
            "approving_customer_member_msg": "Approving Customer Member",
            "column_account_name": "Account Name",
            "column_by_partner": "By Partner",
            "column_cid": "CID",
            "column_email": "Contact Email",
            "column_member_type": "Member Type",
            "column_member_value": "Member Value",
            "column_signup_date": "Signup Date",
            "column_subscribed_to": "Subscribed To",
            "column_timestamp": "Timestamp",
            "confirm": "Are you sure ?",
            "customer_member_approval_failed": "Customer Member Approving Failed",
            "customer_member_approved": "Customer Member has been approved",
            "customer_member_deleted_msg": "customer Member has been deleted",
            "delete": "delete",
            "delete_completed_msg": "delete completed",
            "delete_pending": "Delete pending",
            "delete_result": "delete result",
            "deleting_account_msg": "Delting pending account...",
            "deleting_customer_member_failed_msg": "Customer Member Deleting Failed",
            "deleting_customer_member_msg": "Deleting Customer Member...",
            "deleting_pending_customer_msg": "Deleting pending customer",
            "deletion_delete": "delete",
            "deletion_success_msg": "Delete succeeded",
            "deletion_unexpected_value_return_msg": "returned unexpected value",
            "features_email_only": "Email only",
            "features_none": "None",
            "features_web_email": "Web & Email",
            "features_web_only": "Web only",
            "member": "Member",
            "of_customer": "of customer",
            "raw_result": "raw result",
            "type_alternate_domain": "Alternate Domain",
            "type_es_outbound_ip": "ES Outbound IP",
            "type_rewrite_domain": "Rewrite Domain",
            "type_ws_ip": "WS IP"
        },
        "provisor": {
            "admin_sync": {
                "all": "Company admins in all OUs (including sub OU)",
                "failure": "The Provisor admin rights could not be set.",
                "label": "Transfer Provisor<br>admin rights",
                "success": "The Provisor admin rights have been set.",
                "top_level": "Company admin at OU Top level (root) OU"
            }
        },
        "pw": {
            "change_password_confirm": "Confirm Password",
            "change_password_current": "Current Password",
            "change_password_new": "New Password",
            "change_web_password_confirm": "Confirm Web Proxy Password",
            "change_web_password_new": "New Web Proxy Password",
            "current_pswd_wrong": "Current password is incorrect",
            "day": "day",
            "days": "days",
            "disabled": "Passwords can only changed for users whose sync source is using SMC passwords.",
            "hour": "hour",
            "hours": "hours",
            "indefinitely": "indefinitely",
            "minute": "minute",
            "minutes": "minutes",
            "no_limit": "no limit",
            "password": "Password",
            "responses": {
                "error_set_web_pw": "Error setting new password.",
                "invalid_format": "Password does not meet format requirements.",
                "old_pw_invalid": "Your current password is not correct.",
                "pw_reused": "New password must not be on one of the last %limit% passwords.",
                "pw_same": "Your current and new passwords cannot be the same.",
                "record_fail": "Failed to update password. Unable to record password change.",
                "update_fail": "Failed to update password in system."
            },
            "second": "second",
            "seconds": "seconds",
            "update_success": "Your password has been changed successfully"
        },
        "pw_exp": {
            "changed": "Passwords must be changed every %count% days.",
            "exp_ttl": "days to live",
            "label": "Password Expiration",
            "logging": {
                "disabled": "Password expiration disabled",
                "enabled": "Password expiration enabled",
                "updated": "Password expiration %setting% set to %value%"
            },
            "reuse": "New passwords cannot match any of the last %count%",
            "reuse_limit": "reuse limit"
        },
        "pw_lockout": {
            "label": "Password Lockout",
            "lo_for": "Lockout users for %duration%",
            "lo_users": "Lockout users after %attempts% failed login attempts within %span%",
            "lockout_duration": "lockout duration",
            "lockout_failed_attempt_limit": "failed attempt limit",
            "lockout_failed_attempt_span": "failed attempt span",
            "logging": {
                "disabled": "Password lockout disabled",
                "enabled": "Password lockout enabled",
                "settings": "Password lockout settings updated",
                "updated": "Password lockout %setting% set to %value%"
            },
            "update_error": "Unable to update password lockout settings."
        },
        "se_sampling": {
            "help_disable": "The SEP service includes regular tuning of the machine-learning analytics models which detect social engineering attacks. This tuning is performed by BAE Systems data scientists. Tuning is most effective if our data scientists can analyze the content of emails which our analytics model deems to be risky, to ensure that threats are being identified correctly. This is particularly important during the first six months of a given customer's tenure on the SEP service, since it is during this period that email behavior unique to a customer's organization can be recognized and the analytics models adapted.",
            "help_expiration": "When this control is enabled, our data scientists will be able to sample a very small and targeted set of your emails to allow us to provide the best possible model tuning for this service. This control will be automatically disabled %expire_days% days after the SEP service is enabled.",
            "help_opt_out": "If you wish to prevent sampling of messages of specific users in your company you may add them to the opt-out list.",
            "help_expired": "The message sampling period has expired and messages will no longer be sampled.",
            "label": "Social Engineering Protection Sampling",
            "logging": {
                "update_details": "Social Engineering sampling %action%",
                "updated": "Social Engineering sampling updated"
            },
            "opt_out_list_name": "SEP Sampling Opt Out List",
            "view_list": "Click to view or edit list"
        },
        "session_timeout": {
            "help_text": "Length of time a user may remain inactive before being logged out.",
            "label": "Session Timeout",
            "logging": {
                "setto": "Session timeout set to %timeout%.",
                "updated": "Session timeout updated"
            },
            "update_error": "Unable to update session timeout setting."
        },
        "show_links": {
            "logging": {
                "disabled": "%link_name% menu link disabled.",
                "enabled": "%link_name% menu link enabled."
            }
        },
        "two_factor_adminonly": {
            "help_text": "Require Two-Factor Authentication for admins but not for end users.",
            "label": "Admin Only",
            "logging": {
                "disabled": "Two-Factor admin only disabled",
                "enabled": "Two-Factor admin only enabled",
                "updated": "Two-Factor admin only updated"
            }
        },
        "two_factor_auth": {
            "admins_only": {
                "help_text": "Require Two-Factor Authentication for admins but not for end users.",
                "label": "Admins Only"
            },
            "help_text": "When enabled, a mobile number must be registered upon initial login to the Security Management Console. On subsequent login attempts a verification code will be sent to this mobile number after entering the correct password. The verification code must then be entered to complete the login process.",
            "label": "Two-Factor Authentication",
            "logging": {
                "disabled": "Two-Factor authentication disabled.",
                "enabled": "Two-Factor authentication enabled.",
                "updated": "Two-Factor auth updated."
            }
        },
        "two_factor_remember_device": {
            "help_text": "When enabled, the user is allowed to set a check box that remembers the device used during the login process. That device is then allowed to skip two factor authentication process if it is detected on subsequent logins.",
            "label": "Enable Remember Device",
            "logging": {
                "disabled": "Two-Factor authentication remember device disabled.",
                "enabled": "Two-Factor authentication remember device enabled.",
                "updated": "Two-Factor authentication remember device updated."
            }
        },
        "user_picker": {
            "placeholder": "Enter user's name or email address"
        },
        "vuma": {
            "logging": {
                "disabled": "Vulnerability Management link disabled.",
                "enabled": "Vulnerability Management link enabled."
            }
        },
        "web_proxy_password_notify": {
            "help_text": "Notify users through email when their web proxy passwords are generated or updated.",
            "label": "Web Proxy Password Notify",
            "logging": {
                "disabled": "Web Proxy Password Notify disabled.",
                "enabled": "Web Proxy Password Notify enabled.",
                "updated": "Web Proxy Password Notify updated."
            },
            "password_help_text": "Web proxy passwords are separate from Cloud and\/or LDAP passwords and are to be used when authenticating for web access. The notification email will include the password in clear text and will provide the user a link to change their password.  These passwords should never be the same as a users Cloud or LDAP password."
        }
    });

}(window, function (){
    'use strict';

    function Translator(translationObj) {
        this.en = translationObj;
    }

    Translator.prototype.setTranslationObject = function (translationObj) {
        this.en = translationObj;
    };

    Translator.prototype.trans = function (path) {
        return path
            .split('.')
            .reduce(function (acc, key) {
                return acc[key];
            }, this.en);
    };

    return Translator;
}));