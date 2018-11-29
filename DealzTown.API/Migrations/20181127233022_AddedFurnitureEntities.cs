using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DealzTown.API.Migrations
{
    public partial class AddedFurnitureEntities : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Furnitures",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Price = table.Column<int>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    LikesCount = table.Column<int>(nullable: false),
                    FurnitureType = table.Column<string>(nullable: true),
                    PostedDate = table.Column<DateTime>(nullable: false),
                    LastUpdateDate = table.Column<DateTime>(nullable: false),
                    LastViewDateTime = table.Column<DateTime>(nullable: false),
                    SoldDate = table.Column<DateTime>(nullable: false),
                    UserId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Furnitures", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Furnitures_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FurniturePhotos",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Url = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    DateAdded = table.Column<DateTime>(nullable: false),
                    IsMain = table.Column<bool>(nullable: false),
                    FurnitureId = table.Column<int>(nullable: true),
                    HomeFurnitureId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FurniturePhotos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FurniturePhotos_Furnitures_FurnitureId",
                        column: x => x.FurnitureId,
                        principalTable: "Furnitures",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_FurniturePhotos_FurnitureId",
                table: "FurniturePhotos",
                column: "FurnitureId");

            migrationBuilder.CreateIndex(
                name: "IX_Furnitures_UserId",
                table: "Furnitures",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FurniturePhotos");

            migrationBuilder.DropTable(
                name: "Furnitures");
        }
    }
}
