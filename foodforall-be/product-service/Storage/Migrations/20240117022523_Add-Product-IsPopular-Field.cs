using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace product_service.Storage.Migrations
{
    /// <inheritdoc />
    public partial class AddProductIsPopularField : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsPopular",
                table: "ProductDbSet",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.UpdateData(
                table: "ProductDbSet",
                keyColumn: "Id",
                keyValue: new Guid("14d2aa24-15af-4286-9dd5-8aa0939bef8b"),
                column: "IsPopular",
                value: false);

            migrationBuilder.UpdateData(
                table: "ProductDbSet",
                keyColumn: "Id",
                keyValue: new Guid("acf788bf-f881-4249-9104-ae62cd7262ce"),
                column: "IsPopular",
                value: false);

            migrationBuilder.UpdateData(
                table: "ProductDbSet",
                keyColumn: "Id",
                keyValue: new Guid("b4951e10-76e9-4ef1-b050-31c8e41f02c1"),
                column: "IsPopular",
                value: false);

            migrationBuilder.UpdateData(
                table: "ProductDbSet",
                keyColumn: "Id",
                keyValue: new Guid("cc1c6aad-18f3-40da-b337-1f55609baa12"),
                column: "IsPopular",
                value: false);

            migrationBuilder.UpdateData(
                table: "ProductDbSet",
                keyColumn: "Id",
                keyValue: new Guid("cf1711ce-216a-45c7-9234-8dd9e54dfb0c"),
                column: "IsPopular",
                value: false);

            migrationBuilder.UpdateData(
                table: "ProductDbSet",
                keyColumn: "Id",
                keyValue: new Guid("d3785f31-20b8-4d48-9e2b-7a1f456d05b2"),
                column: "IsPopular",
                value: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsPopular",
                table: "ProductDbSet");
        }
    }
}
