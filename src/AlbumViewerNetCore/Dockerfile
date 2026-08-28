# Build context is the repo root (see docker-compose.yml) — the Angular build
# writes into ../AlbumViewerNetCore/wwwroot (angular.json outputPath), so both
# sibling source trees must be available together during the build.

# ---- Stage 1: build the Angular frontend ----
FROM node:22-alpine AS angular-build
WORKDIR /src/AlbumViewerAngular
COPY src/AlbumViewerAngular/package*.json ./
RUN npm ci
COPY src/AlbumViewerAngular/ ./
RUN mkdir -p /src/AlbumViewerNetCore/wwwroot && npx ng build

# ---- Stage 2: build and publish the .NET backend ----
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS dotnet-build
WORKDIR /src
COPY AlbumViewerNetCore.sln ./
COPY src/AlbumViewerNetCore/AlbumViewerNetCore.csproj src/AlbumViewerNetCore/
COPY src/AlbumViewerBusiness/AlbumViewerBusiness.csproj src/AlbumViewerBusiness/
RUN dotnet restore src/AlbumViewerNetCore/AlbumViewerNetCore.csproj
COPY src/AlbumViewerNetCore/ src/AlbumViewerNetCore/
COPY src/AlbumViewerBusiness/ src/AlbumViewerBusiness/
COPY --from=angular-build /src/AlbumViewerNetCore/wwwroot src/AlbumViewerNetCore/wwwroot
RUN dotnet publish src/AlbumViewerNetCore/AlbumViewerNetCore.csproj -c Release -o /app/publish

# ---- Stage 3: runtime ----
FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS final
WORKDIR /app
ENV ASPNETCORE_URLS=http://+:8080
EXPOSE 8080
COPY --from=dotnet-build /app/publish .
ENTRYPOINT ["dotnet", "AlbumViewerNetCore.dll"]
