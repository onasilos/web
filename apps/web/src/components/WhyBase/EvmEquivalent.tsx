import { ButtonWithLinkAndEventLogging } from 'apps/web/src/components/Button/ButtonWithLinkAndEventLogging';

export default async function EvmEquivalent() {
  return (
    <div
      id="evmCompatibility"
      className="flex flex-col gap-8 bg-black px-12 pb-6 pt-6 sm:grid sm:grid-cols-[1fr_1fr] sm:gap-16 sm:px-16 sm:pb-8 sm:pt-8 lg:px-24 lg:pb-10 lg:pt-10"
    >
      <div className="hidden h-auto w-full bg-[url('../public/images/EVM-compatibility-chains.png')] bg-contain bg-center bg-no-repeat sm:block" />
      <div className="flex w-full flex-col justify-center gap-8 lg:gap-16 xl:max-w-[550px]">
        <h2 className="flex flex-row font-display text-3xl sm:text-4xl lg:text-5xl">
          <span>3.</span>
          <span className="ml-4">EVM Compatible for effortless migration</span>
        </h2>
        <div className="h-[235px] w-[250px] self-center bg-[url('../public/images/EVM-compatibility-chains.png')] bg-contain bg-center bg-no-repeat sm:hidden" />
        <div>
          <span className="text-base sm:text-lg">
            Move your project to Base in minutes from any other EVM-compatible chain and unlock the
            full potential of the Superchain and OP stack
          </span>
          <div>
            <ButtonWithLinkAndEventLogging
              href="https://docs.base.org/docs"
              eventName="evm_compatible_start_migrating"
              eventContext="why_base"
              target="_blank"
              rel="noreferrer noopener"
              linkClassNames="inline-block"
              buttonClassNames="mt-4 uppercase w-full sm:w-auto"
            >
              Start Migrating
            </ButtonWithLinkAndEventLogging>
          </div>
        </div>
      </div>
    </div>
  );
}
