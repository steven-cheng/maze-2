// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010202020202020202020202020202010102030303030303030303030303020101020203030303030303030303030201010202020202020202030303030302010102030303030303020302020303020101020303030303030203030202020201010203030303020302030303030202010102030303030203020303030302020101020303030202030303030303020201010203030302030303030303030202010102030303020202020303030302020101020303030303030202020303020201010203030303030302030303030202010102020202020202020202020202020101010101010101010101010101010101`, img`
. . . . . . . . . . . . . . . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 2 . . . . . . . . . . . 2 . 
. 2 2 2 2 2 2 2 2 . . . . . 2 . 
. 2 . . . . . . 2 . 2 2 . . 2 . 
. 2 . . . . . . 2 . . 2 2 2 2 . 
. 2 . . . . 2 . 2 . . . . 2 2 . 
. 2 . . . . 2 . 2 . . . . 2 2 . 
. 2 . . . 2 2 . . . . . . 2 2 . 
. 2 . . . 2 . . . . . . . 2 2 . 
. 2 . . . 2 2 2 2 . . . . 2 2 . 
. 2 . . . . . . 2 2 2 . . 2 2 . 
. 2 . . . . . . 2 . . . . 2 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileDarkGrass2,sprites.dungeon.floorLightMoss,sprites.castle.tilePath5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
