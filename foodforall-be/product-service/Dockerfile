FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["product-service/product-service.csproj", "product-service/"]
RUN dotnet restore "product-service/product-service.csproj"
COPY . .
WORKDIR "/src/product-service"
RUN dotnet build "product-service.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "product-service.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "product-service.dll"]
