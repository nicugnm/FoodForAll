using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace product_service.Storage.Migrations
{
    /// <inheritdoc />
    public partial class RestaurantProductAddData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ProductDbSet",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Price = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    QuantityAvailable = table.Column<int>(type: "int", nullable: false),
                    Enabled = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductDbSet", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "RestaurantDbSet",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CloseHour = table.Column<TimeSpan>(type: "time", nullable: false),
                    OpenDays = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TagsType = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RestaurantDbSet", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "RestaurantProduct",
                columns: table => new
                {
                    RestaurantId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ProductId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RestaurantProduct", x => new { x.RestaurantId, x.ProductId });
                    table.ForeignKey(
                        name: "FK_RestaurantProduct_ProductDbSet_ProductId",
                        column: x => x.ProductId,
                        principalTable: "ProductDbSet",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_RestaurantProduct_RestaurantDbSet_RestaurantId",
                        column: x => x.RestaurantId,
                        principalTable: "RestaurantDbSet",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "ProductDbSet",
                columns: new[] { "Id", "Description", "Enabled", "Name", "Price", "QuantityAvailable" },
                values: new object[,]
                {
                    { new Guid("14d2aa24-15af-4286-9dd5-8aa0939bef8b"), "Description 2", true, "Product 2", 15.53m, 0 },
                    { new Guid("acf788bf-f881-4249-9104-ae62cd7262ce"), "Description 3", false, "Product 3", 15.53m, 10 },
                    { new Guid("b4951e10-76e9-4ef1-b050-31c8e41f02c1"), "Description 1", true, "Product 4", 30.53m, 2 },
                    { new Guid("cc1c6aad-18f3-40da-b337-1f55609baa12"), "Description 1", true, "Product 1", 30.53m, 2 },
                    { new Guid("cf1711ce-216a-45c7-9234-8dd9e54dfb0c"), "Description 3", false, "Product 6", 15.53m, 10 },
                    { new Guid("d3785f31-20b8-4d48-9e2b-7a1f456d05b2"), "Description 2", true, "Product 5", 15.53m, 0 }
                });

            migrationBuilder.InsertData(
                table: "RestaurantDbSet",
                columns: new[] { "Id", "CloseHour", "Description", "Name", "OpenDays", "TagsType" },
                values: new object[,]
                {
                    { new Guid("6b950909-bd47-42fc-aae5-b20d426f992b"), new TimeSpan(1), "KFC Description", "KFC", "[1,2,3,4,5,6,0]", "[0,1]" },
                    { new Guid("e6a953fd-597a-409f-9cee-cb87b94483c8"), new TimeSpan(2), "Mc Donalds Description", "Mc Donalds", "[1,2,3,4,5,6,0]", "[2,1]" }
                });

            migrationBuilder.InsertData(
                table: "RestaurantProduct",
                columns: new[] { "ProductId", "RestaurantId" },
                values: new object[,]
                {
                    { new Guid("14d2aa24-15af-4286-9dd5-8aa0939bef8b"), new Guid("6b950909-bd47-42fc-aae5-b20d426f992b") },
                    { new Guid("acf788bf-f881-4249-9104-ae62cd7262ce"), new Guid("6b950909-bd47-42fc-aae5-b20d426f992b") },
                    { new Guid("cc1c6aad-18f3-40da-b337-1f55609baa12"), new Guid("6b950909-bd47-42fc-aae5-b20d426f992b") },
                    { new Guid("b4951e10-76e9-4ef1-b050-31c8e41f02c1"), new Guid("e6a953fd-597a-409f-9cee-cb87b94483c8") },
                    { new Guid("cf1711ce-216a-45c7-9234-8dd9e54dfb0c"), new Guid("e6a953fd-597a-409f-9cee-cb87b94483c8") },
                    { new Guid("d3785f31-20b8-4d48-9e2b-7a1f456d05b2"), new Guid("e6a953fd-597a-409f-9cee-cb87b94483c8") }
                });

            migrationBuilder.CreateIndex(
                name: "IX_RestaurantProduct_ProductId",
                table: "RestaurantProduct",
                column: "ProductId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "RestaurantProduct");

            migrationBuilder.DropTable(
                name: "ProductDbSet");

            migrationBuilder.DropTable(
                name: "RestaurantDbSet");
        }
    }
}
