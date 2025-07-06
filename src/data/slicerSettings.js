// src/data/slicerSettings.js

const slicerSettings = [
    {
        id: 1,
        name: 'Layer Height',
        otherNames: ['Layer Height', 'Layer Thickness'],
        slicerLocations: {
            cura: 'Quality > Layer Height',
            prusaslicer: 'Print Settings > Layers and Perimeters > Layer height',
            superslicer: 'Print Settings > Layers and Perimeters > Layer height',
            orcaslicer: 'Quality > Layer Height',
            bambuslicer: 'Quality > Layer Height'
        },
        description: 'Controls the thickness of each printed layer. Lower values yield finer detail but increase print time.',
        image: 'layer-height.jpg' // Example image
    },
    {
        id: 2,
        name: 'Infill Density',
        otherNames: ['Infill Density', 'Fill Density'],
        slicerLocations: {
            cura: 'Infill > Infill Density',
            prusaslicer: 'Print Settings > Infill > Fill density',
            superslicer: 'Print Settings > Infill > Fill density',
            orcaslicer: 'Infill > Infill Density',
            bambuslicer: 'Infill > Infill Density'
        },
        description: 'Determines how solid the inside of your print is. Higher values make prints stronger but use more material.',
        image: null
    },
    {
        id: 3,
        name: 'Print Speed',
        otherNames: ['Print Speed', 'Speed'],
        slicerLocations: {
            cura: 'Speed > Print Speed',
            prusaslicer: 'Print Settings > Speed > Perimeters/Small perimeters/External perimeters',
            superslicer: 'Print Settings > Speed > Perimeters/Small perimeters/External perimeters',
            orcaslicer: 'Speed > Print Speed',
            bambuslicer: 'Speed > Print Speed'
        },
        description: 'Sets how fast the printer moves while extruding. Higher speeds reduce print time but may affect quality.',
        image: null
    },
    {
        id: 4,
        name: 'Support Material',
        otherNames: ['Support Material', 'Supports'],
        slicerLocations: {
            cura: 'Support > Generate Support',
            prusaslicer: 'Print Settings > Support material > Generate support material',
            superslicer: 'Print Settings > Support material > Generate support material',
            orcaslicer: 'Support > Generate Support',
            bambuslicer: 'Support > Generate Support'
        },
        description: 'Enables or disables support structures for overhangs and bridges.',
        image: null
    },
    {
        id: 5,
        name: 'Bed Temperature',
        otherNames: ['Bed Temperature', 'Heated Bed Temp'],
        slicerLocations: {
            cura: 'Material > Build Plate Temperature',
            prusaslicer: 'Filament Settings > Filament > Bed temperature',
            superslicer: 'Filament Settings > Filament > Bed temperature',
            orcaslicer: 'Material > Build Plate Temperature',
            bambuslicer: 'Material > Build Plate Temperature'
        },
        description: 'Sets the temperature of the heated bed to help prints stick and prevent warping.',
        image: null
    },
    {
        id: 6,
        name: 'Nozzle Temperature',
        otherNames: ['Nozzle Temperature', 'Hotend Temp', 'Extruder Temp'],
        slicerLocations: {
            cura: 'Material > Printing Temperature',
            prusaslicer: 'Filament Settings > Filament > Extruder temperature',
            superslicer: 'Filament Settings > Filament > Extruder temperature',
            orcaslicer: 'Material > Printing Temperature',
            bambuslicer: 'Material > Printing Temperature'
        },
        description: 'Sets the temperature of the nozzle/hotend for melting filament.',
        image: null
    },
    {
        id: 7,
        name: 'Retraction Distance',
        otherNames: ['Retraction Distance', 'Retraction Length'],
        slicerLocations: {
            cura: 'Material > Retraction Distance',
            prusaslicer: 'Printer Settings > Extruder 1 > Retraction length',
            superslicer: 'Printer Settings > Extruder 1 > Retraction length',
            orcaslicer: 'Material > Retraction Distance',
            bambuslicer: 'Material > Retraction Distance'
        },
        description: 'Controls how much filament is pulled back during travel moves to prevent stringing.',
        image: null
    },
    {
        id: 8,
        name: 'Retraction Speed',
        otherNames: ['Retraction Speed'],
        slicerLocations: {
            cura: 'Material > Retraction Speed',
            prusaslicer: 'Printer Settings > Extruder 1 > Retraction speed',
            superslicer: 'Printer Settings > Extruder 1 > Retraction speed',
            orcaslicer: 'Material > Retraction Speed',
            bambuslicer: 'Material > Retraction Speed'
        },
        description: 'Sets the speed at which filament is retracted and re-primed.',
        image: null
    },
    {
        id: 9,
        name: 'Initial Layer Height',
        otherNames: ['Initial Layer Height', 'First Layer Height'],
        slicerLocations: {
            cura: 'Quality > Initial Layer Height',
            prusaslicer: 'Print Settings > Layers and Perimeters > First layer height',
            superslicer: 'Print Settings > Layers and Perimeters > First layer height',
            orcaslicer: 'Quality > Initial Layer Height',
            bambuslicer: 'Quality > Initial Layer Height'
        },
        description: 'Controls the thickness of the first printed layer for better adhesion.',
        image: null
    },
    {
        id: 10,
        name: 'Brim Width',
        otherNames: ['Brim Width', 'Brim Size'],
        slicerLocations: {
            cura: 'Build Plate Adhesion > Brim Width',
            prusaslicer: 'Print Settings > Skirt and Brim > Brim width',
            superslicer: 'Print Settings > Skirt and Brim > Brim width',
            orcaslicer: 'Build Plate Adhesion > Brim Width',
            bambuslicer: 'Build Plate Adhesion > Brim Width'
        },
        description: 'Sets the width of the brim to help prints stick to the bed.',
        image: null
    },
    {
        id: 11,
        name: 'Skirt Line Count',
        otherNames: ['Skirt Line Count', 'Skirt Lines'],
        slicerLocations: {
            cura: 'Build Plate Adhesion > Skirt Line Count',
            prusaslicer: 'Print Settings > Skirt and Brim > Skirt line count',
            superslicer: 'Print Settings > Skirt and Brim > Skirt line count',
            orcaslicer: 'Build Plate Adhesion > Skirt Line Count',
            bambuslicer: 'Build Plate Adhesion > Skirt Line Count'
        },
        description: 'Sets the number of skirt lines printed around the object for priming the nozzle.',
        image: null
    },
    {
        id: 12,
        name: 'Cooling Fan Speed',
        otherNames: ['Cooling Fan Speed', 'Fan Speed'],
        slicerLocations: {
            cura: 'Cooling > Fan Speed',
            prusaslicer: 'Filament Settings > Cooling > Enable fan and Fan speed',
            superslicer: 'Filament Settings > Cooling > Enable fan and Fan speed',
            orcaslicer: 'Cooling > Fan Speed',
            bambuslicer: 'Cooling > Fan Speed'
        },
        description: 'Controls the speed of the part cooling fan during printing.',
        image: null
    },
    {
        id: 13,
        name: 'Wall Line Count',
        otherNames: ['Wall Line Count', 'Perimeters'],
        slicerLocations: {
            cura: 'Shell > Wall Line Count',
            prusaslicer: 'Print Settings > Layers and Perimeters > Perimeters',
            superslicer: 'Print Settings > Layers and Perimeters > Perimeters',
            orcaslicer: 'Shell > Wall Line Count',
            bambuslicer: 'Shell > Wall Line Count'
        },
        description: 'Sets the number of perimeters or wall lines for each layer.',
        image: null
    },
    {
        id: 14,
        name: 'Top Layers',
        otherNames: ['Top Layers', 'Top Solid Layers'],
        slicerLocations: {
            cura: 'Shell > Top Layers',
            prusaslicer: 'Print Settings > Layers and Perimeters > Top solid layers',
            superslicer: 'Print Settings > Layers and Perimeters > Top solid layers',
            orcaslicer: 'Shell > Top Layers',
            bambuslicer: 'Shell > Top Layers'
        },
        description: 'Sets the number of solid layers at the top of the print.',
        image: null
    },
    {
        id: 15,
        name: 'Bottom Layers',
        otherNames: ['Bottom Layers', 'Bottom Solid Layers'],
        slicerLocations: {
            cura: 'Shell > Bottom Layers',
            prusaslicer: 'Print Settings > Layers and Perimeters > Bottom solid layers',
            superslicer: 'Print Settings > Layers and Perimeters > Bottom solid layers',
            orcaslicer: 'Shell > Bottom Layers',
            bambuslicer: 'Shell > Bottom Layers'
        },
        description: 'Sets the number of solid layers at the bottom of the print.',
        image: null
    },
    {
        id: 16,
        name: 'Infill Pattern',
        otherNames: ['Infill Pattern', 'Fill Pattern'],
        slicerLocations: {
            cura: 'Infill > Infill Pattern',
            prusaslicer: 'Print Settings > Infill > Fill pattern',
            superslicer: 'Print Settings > Infill > Fill pattern',
            orcaslicer: 'Infill > Infill Pattern',
            bambuslicer: 'Infill > Infill Pattern'
        },
        description: 'Selects the pattern used for infill, such as grid, gyroid, or lines.',
        image: null
    },
    {
        id: 17,
        name: 'Travel Speed',
        otherNames: ['Travel Speed'],
        slicerLocations: {
            cura: 'Speed > Travel Speed',
            prusaslicer: 'Print Settings > Speed > Travel',
            superslicer: 'Print Settings > Speed > Travel',
            orcaslicer: 'Speed > Travel Speed',
            bambuslicer: 'Speed > Travel Speed'
        },
        description: 'Sets the speed for non-printing (travel) moves.',
        image: null
    },
    {
        id: 18,
        name: 'Z Hop When Retracted',
        otherNames: ['Z Hop', 'Lift Z'],
        slicerLocations: {
            cura: 'Travel > Z Hop When Retracted',
            prusaslicer: 'Printer Settings > Extruder 1 > Lift Z',
            superslicer: 'Printer Settings > Extruder 1 > Lift Z',
            orcaslicer: 'Travel > Z Hop When Retracted',
            bambuslicer: 'Travel > Z Hop When Retracted'
        },
        description: 'Lifts the nozzle during travel moves to avoid hitting the print.',
        image: null
    },
    {
        id: 19,
        name: 'Support Overhang Angle',
        otherNames: ['Support Overhang Angle', 'Overhang Threshold'],
        slicerLocations: {
            cura: 'Support > Support Overhang Angle',
            prusaslicer: 'Print Settings > Support material > Overhang threshold',
            superslicer: 'Print Settings > Support material > Overhang threshold',
            orcaslicer: 'Support > Support Overhang Angle',
            bambuslicer: 'Support > Support Overhang Angle'
        },
        description: 'Sets the minimum angle at which supports are generated.',
        image: null
    },
    {
        id: 20,
        name: 'Ironing',
        otherNames: ['Ironing', 'Surface Smoothing'],
        slicerLocations: {
            cura: 'Experimental > Ironing',
            prusaslicer: 'Print Settings > Layers and Perimeters > Ironing',
            superslicer: 'Print Settings > Layers and Perimeters > Ironing',
            orcaslicer: 'Experimental > Ironing',
            bambuslicer: 'Experimental > Ironing'
        },
        description: 'A technique to smooth the top surface of prints by running the nozzle over it without extruding.',
        image: null
    }
];

export default slicerSettings;
