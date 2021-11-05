from abc import abstractmethod

try:
    from ...helpermodules import log
    from ..common import connect_tcp
except:
    from pathlib import Path
    import sys
    sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
    from helpermodules import log
    from modules.common import connect_tcp


class MiscDevice:
    def __init__(self, device: dict, client: connect_tcp.ConnectTcp) -> None:
        try:
            self.data = {"config": device,
                         "components": {}}
            self.client = client
        except:
            log.MainLogger().exception("Fehler im Modul "+device["name"])

    def instantiate_component(self, component_config: dict, factory) -> None:
        try:
            self.data["components"]["component"+str(component_config["id"])] = factory(self.data["config"]["id"], component_config, self.client)
        except:
            log.MainLogger().exception("Fehler im Modul "+self.data["config"]["name"])

    def component_factory(self, component_type: str):
        try:
            if component_type in self._COMPONENT_TYPE_TO_CLASS:
                return self._COMPONENT_TYPE_TO_CLASS[component_type]
            raise Exception("illegal component type "+component_type+". Allowed values: "+','.join(self._COMPONENT_TYPE_TO_CLASS.keys()))
        except Exception as e:
            log.MainLogger().exception("Fehler im Modul "+self.data["config"]["name"])

    @abstractmethod
    def add_component(self, component_config: dict) -> None:
        pass

    def update_values(self):
        try:
            log.MainLogger().debug("Start device reading"+str(self.data["components"]))
            if self.data["components"]:
                for component in self.data["components"]:
                    self.data["components"][component].update_values()
            else:
                log.MainLogger().warning(self.data["config"]["name"]+": Es konnten keine Werte gelesen werden, da noch keine Komponenten konfiguriert wurden.")
        except:
            log.MainLogger().exception("Fehler im Modul "+self.data["config"]["name"])
