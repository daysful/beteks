// #region imports
    // #region libraries
    import React, {
        useRef,
        useState,
    } from 'react';

    import {
        AnyAction,
        ThunkDispatch,
    } from '@reduxjs/toolkit';
    import { connect } from 'react-redux';

    import {
        Theme,
    } from '@plurid/plurid-themes';
    // #endregion libraries


    // #region external
    import {
        Modulator,
    } from '~kernel-data/interfaces';

    import {
        rowTemplate,
        rowRenderFields,
    } from '~kernel-data/constants';

    import {
        DashboardRenderProperties,
    } from '~kernel-components/DashboardsRenderer/data';

    import EntityView, {
        EntityViewRefAttributes,
    } from '~kernel-components/EntityView';

    import {
        StyledDashboardContainer,
    } from '~kernel-services/styled';

    import graphqlClient from '~kernel-services/graphql/client';

    import {
        BETSE_MUTATIONS,
    } from '~kernel-services/graphql/mutate/betse';

    import { AppState } from '~kernel-services/state/store';
    import StateContext from '~kernel-services/state/context';
    import selectors from '~kernel-services/state/selectors';
    // import actions from '~kernel-services/state/actions';
    // #endregion external


    // #region internal
    // #endregion internal
// #endregion imports



// #region module
export interface ModulatorsOwnProperties {
}

export interface ModulatorsStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
    stateModulators: Modulator[];
}

export interface ModulatorsDispatchProperties {
}

export type ModulatorsProperties =
    & ModulatorsOwnProperties & DashboardRenderProperties
    & ModulatorsStateProperties
    & ModulatorsDispatchProperties;


const Modulators: React.FC<ModulatorsProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region own
        setRenderView,
        setFullRenderArea,
        // #endregion own

        // #region state
        stateGeneralTheme,
        stateInteractionTheme,
        stateModulators,
        // #endregion state
    } = properties;
    // #endregion properties


    // #region references
    const entityView = useRef<EntityViewRefAttributes | null>(null);
    // #endregion references


    // #region handlers
    const handleObliterate = async (
        id: string,
    ) => {
        try {
            graphqlClient.mutate({
                mutation: BETSE_MUTATIONS.REMOVE_BETSE_MODULATOR,
                variables: {
                    input: id,
                },
            });
        } catch (error) {
            return;
        }
    }

    const filterUpdate = (
        rawValue: string,
    ) => {
    }

    const actionScrollBottom = async (
        data: any[],
    ) => {
    }
    // #endregion handlers


    // #region state
    const [
        loading,
        setLoading,
    ] = useState(false);

    const [
        filterValue,
        setFilterValue,
    ] = useState('');

    const [
        filterIDs,
        setFilterIDs,
    ] = useState<string[]>([]);
    // #endregion state


    // #region render
    const rowsHeader = (
        <>
            <div>
                name
            </div>

            <div>
                generated on
            </div>

            <div />
        </>
    );

    return (
        <StyledDashboardContainer
            theme={stateGeneralTheme}
        >
            <EntityView
                ref={entityView}

                entities={stateModulators}
                searchFields={['name']}

                generalTheme={stateGeneralTheme}
                interactionTheme={stateInteractionTheme}

                rowTemplate={rowTemplate}
                rowsHeader={rowsHeader}
                noRows="no modulators"

                rowRenderFields={rowRenderFields('modulator')}
                rowRenderMethods={{
                    handleObliterate,
                }}

                loading={loading ? 1 : 0}

                filterUpdate={filterUpdate}
                refresh={() => {
                }}

                actionButtonText="New Modulator"
                actionButtonClick={() => {
                    setFullRenderArea(true);
                    setRenderView('new-modulator');
                }}

                actionScrollBottom={actionScrollBottom}
            />
        </StyledDashboardContainer>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): ModulatorsStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
    stateModulators: selectors.data.getData(state).modulators,
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): ModulatorsDispatchProperties => ({
});


const ConnectedModulators = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(Modulators);
// #endregion module



// #region exports
export default ConnectedModulators;
// #endregion exports
