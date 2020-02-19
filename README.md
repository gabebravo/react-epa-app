This project creates a UI for EPA data exposed by the [envirofacts api](https://www.epa.gov/enviro/envirofacts-data-service-api)

## Overview of the API :

[api search parameters](https://www.epa.gov/enviro/envirofacts-data-service-api#metadata)

Constructing a Search
To build a search, users create a URL with a specific set of parameters. This is done by creating a string using the following format:

Data Service API URL

1. Table Name – At least one table name is required. Up to three table names can be entered. When inserting multiple tables into the URL, they must share an ID or common column, so that the tables can be joined or linked. To retrieve an accurate output it is best to use tables that share an ID column. For example, within the tables that make up the TRI Facility Information, they each share an ID column known as TRI_FACILITY_ID. This can be visually seen within the Envirofacts model pages for various subject areas like TRI Facility Information. Please refer to the Envirofacts database metadata to locate tables that can be joined via ID columns within the RESTful data service.

2. Column Name – This is an optional entry. Enter a column name and value to limit the results. Multiple columns may be used within the URL to limit the data from a table or tables. The column name is not case sensitive.

3. Operator – This is an optional entry. This parameter allows users to pass in an operator with the query. Default output is "=" and does not require an operator, but users can enter "<", " >", "!=", "BEGINNING", "CONTAINING", operators as well via the URL. The "BEGINNING" operator will return rows where the start of a column value is equal to the search value. While the "CONTAINING" will return rows where the search value is contained within the column value.

OPERATOR USAGE
= The database will only return rows where the column value is equal to the search value.
!= The database will only return rows where the column value is NOT equal to the search value.
< The database will only return rows where the column value is less than the search value.

>     The database will only return rows where the column value is greater than the search value.

BEGINNING The database will only return rows where the start of column value is equal to the search value. A comparison is done, character by character, up to the last character entered for the search value.

CONTAINING For Character fields only. The database will only return rows where the search value is contained within the column value. As an example if the search value entered is "ABC" and the column value is "CCABCDD" then the row will be accepted. Using the same search value of "ABC" if the column value was "AABBCC" then the row will be rejected.

4. Column Value – This is an optional entry (except when using #2 - Column Name). The column value is queried against the database without modification, so this value is case-sensitive. Use the program system model and queries within Envirofacts to double check the case for the value.

5. Rows – This is an optional entry. Specify the rows to display by entering 'rows/ <first_row> : <last_row>' Results numbering starts at 0. So to get the first five hundred rows enter rows/0:499 If rows is not specified, the default is the first 10000 rows.

6. Output Format – This is an optional entry. The default output is in XML; however, output options of JSON, CSV or Excel can be requested in the URL. The output format is not case sensitive.
   EF API Count

7. Count - This is an optional entry and is shown as #7 in the above URL image. Count shows the total number of records that will be returned for this search once the Count option is removed. When Count is used, Excel, CSV, or XML cannot be specified. The column name is not case sensitive.

### Steps to replicate a query url :

1. pick the Greenhouse Gas subject area (sub part). For example, landfills are HH:
   [GHG Envirofacts subject areas](https://www.epa.gov/enviro/greenhouse-gas-model)

2. pick a table within that specific sub part using the model that shows all the table names :
   [GHG Envirofacts tables for the HH sub part](https://www.epa.gov/enviro/greenhouse-gas-subpart-hh-model)

3. pick the specific column/columns that are relevant to the query. For example, wihtin the HH_LANDFILL_INFO table :
   [Columns within the HH_LANDFILL_INFO table](https://enviro.epa.gov/enviro/ef_metadata_html.ef_metadata_table?p_table_name=HH_LANDFILL_INFO&p_topic=GHG)

4. With the table and column ( HH_LANDFILL_INFO & REPORTING_YEAR ), you can build out the base of the query url :
   - see the Data Service API URL section above : [api search parameters](https://www.epa.gov/enviro/envirofacts-data-service-api#metadata)

### Example query :

[2018 Landfill Data for US facilities](https://enviro.epa.gov/enviro/efservice/HH_LANDFILL_INFO/REPORTING_YEAR/=/2018/rows/0:499/JSON)
